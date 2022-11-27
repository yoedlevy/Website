import { useState } from 'react';
import questions from "../data/questions.json";
import '../style/questionsCard.css';

const QuestionCard = (props) => {
    const data = questions.questions;
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [class1, setClass1] = useState('');
    const [class2, setClass2] = useState('');
    const [class3, setClass3] = useState('');
    const [class4, setClass4] = useState('');
    const [isDisable, setDisable] = useState(false);
    const [score, setscore] = useState(0);

    const answerClick = (e) => {
        setDisable(true);
        const id = e.target.id;
        if(data[currentQuestion].answerOptions[id-1].isCorrect === true) {
            setscore(score + 10);
            if(id === '1') {
                setClass1('correct') }
            if(id === '2') {
                setClass2('correct') }
            if(id === '3') {
                setClass3('correct') }
            if(id === '4') {
                setClass4('correct') }
        }
        else {
            if(score > 0)
                setscore(score - 10);
            if(id === '1') {
                setClass1('incorrect') }
            if(id === '2') {
                setClass2('incorrect') }
            if(id === '3') {
                setClass3('incorrect') }
            if(id === '4') {
                setClass4('incorrect') }
            for (let index = 0; index < data[currentQuestion].answerOptions.length; index++) {
                if(data[currentQuestion].answerOptions[index].isCorrect) {
                    if(index === 0) {
                        setClass1('correct') }
                    if(index === 1) {
                        setClass2('correct') }
                    if(index === 2) {
                        setClass3('correct') }
                    if(index === 3) {
                        setClass4('correct') }
                }
                
            }
        }
        
        setTimeout(() => {        
                const nextQuestion = currentQuestion + 1;
                if(nextQuestion < data.length) {
                    setCurrentQuestion(nextQuestion);
                }
                else {
                    alert("You have reached the end of the quiz");
                    props.callback(score, data[currentQuestion].answerOptions[id-1].isCorrect);
                    setCurrentQuestion(0);
                    setscore(0);
                } 
                setClass1('');
                setClass2('');
                setClass3('');
                setClass4('');
                setDisable(false);
            }, 1500);
    }

    return (
        <div className='component'>
      <div className='question-section'>
         <div className='question-count'>
            <span>Question {currentQuestion + 1}</span>/{data.length}
         </div>
         <div className='question-text'>{data[currentQuestion].questionText}</div>
      </div>
      <div className='answer-section'>
        <button id='1' disabled={isDisable} className={`answer-button ${class1}`} onClick={answerClick}>{data[currentQuestion].answerOptions[0].answerText}</button>
        <button id='2' disabled={isDisable} className={`answer-button ${class2}`} onClick={answerClick}>{data[currentQuestion].answerOptions[1].answerText}</button>
        <button id='3' disabled={isDisable} className={`answer-button ${class3}`} onClick={answerClick}>{data[currentQuestion].answerOptions[2].answerText}</button>
        <button id='4' disabled={isDisable} className={`answer-button ${class4}`} onClick={answerClick}>{data[currentQuestion].answerOptions[3].answerText}</button>
      </div>
      <div>Score: {score}</div>
      </div>
    )
  }

export default QuestionCard;
