import './style/App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Weather from './components/Weather';
import Quiz from './components/Quiz';
import Home from './components/Home';

function App() {
  return (
    <>
    <Navbar/>
    <div className='container'>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Weather" element={<Weather />}/>
      <Route path="/Quiz" element={<Quiz />}/>
    </Routes>
    </div>
    </>
  );
}

export default App;

