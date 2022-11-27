import {React, useState} from "react";
import DisplayWeather from "./DisplayWeather";
import '../style/weather.css';

const Weather = () => {

    const APIKEY = "e0b69f8b2229e4d516d67f9b3d817079";

    const [form, setForm] = useState({
        city:"",
        country:""
    })

    const [weather, setWeather] = useState([])

    async function weatherData(e){
        e.preventDefault();
        if(form.city === "") {
            alert("Add city");
        }
        else if(form.country === "") {
            alert("Add country");
        }
        else {
            const countryCode = await fetch(
                `https://public.opendatasoft.com/api/records/1.0/search/?dataset=countries-codes&q=${form.country}`
            ).then((res) => res.json())
            if(countryCode.records[0] !== undefined) {
             const data = await fetch(
                   `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${countryCode.records[0].fields.iso2_code}&appid=${APIKEY}`
              )
             .then((res) => res.json())
             .then((data) => data);

              setWeather(
                   {
                      data : data
                  }
              );
            }
            else
            {
                setWeather({data:{cod:"404", message: "country not found"}});
            }
        }
    }

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if(name === "city") {
            setForm({...form, city:value})
        }

        if(name === "country") {
            setForm({...form, country:value})
        }
    }
    return (
      <div className='weather'>
         <span className="title">Weather App</span>
         <br />
         <form>
            <input type="text" name="city" placeholder="city" onChange={e => handleChange(e)}/>
            &nbsp;&nbsp;&nbsp;
            <input type="text" name="country" placeholder="country" onChange={e => handleChange(e)}/>
            <button className="getweather"onClick={(e) => weatherData(e)}>Submit</button>
         </form>

         {
            weather.data !== undefined ? (
            <div>
                <DisplayWeather data={weather.data} />
            </div>
         ) : null }
      </div>
    );
  }

export default Weather;
