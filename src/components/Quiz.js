import { useState } from "react";
import QuestionCard from "./QuestionCard";
import '../style/questionsCard.css';

const Quiz = () => {

  const [score, setScore] = useState(0);

  function getScore(childScore, isCorrect){
    if(isCorrect)
      childScore += 10;
    else
      childScore -= 10;
    if(childScore > score)
      setScore(childScore)
  }
    return (
      <div>
        {
            <div className="fatherCom">
                 <QuestionCard callback={getScore}/>
            </div>
           
        }
        <div className="bestScore">
           <h2>Best Score: {score}</h2> 
        </div>
      </div>
    )
  }

export default Quiz;
