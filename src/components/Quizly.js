import React, { Component, Fragment } from 'react';
import {Helmet} from 'react-helmet'
import backGround from '../assets/Quizlybackground.jpg'
import '../styles/Quizly.css'
//import 'react-toastify/dist/ReactToastify.css';
import questionsData from '../questions.json'
import isEmpty from '../utils/isEmpty';

//variables 
var luckyGuessUsed = false;
var fiftyFiftyUsed = false;

var activeAnswer;


function checkAnswerA(){
    //alert("answer: A");
    let answerA =  document.querySelector('#answerA');
    let A = answerA.textContent;
    checkAnswer(A);
}

function checkAnswerB(){
    //alert("answer: B");
    let answerB =  document.querySelector('#answerB');
    let B = answerB.textContent;
    checkAnswer(B);
}

function checkAnswerC(){
    //alert("answer: C");
    let answerC =  document.querySelector('#answerC');
    let C = answerC.textContent;
    checkAnswer(C);
}

function checkAnswerD(){
    //alert("answer: D");
    let answerD =  document.querySelector('#answerD');
    let D = answerD.textContent;
    checkAnswer(D);
}

function checkAnswer(ans){
    let rightAnswer =  document.querySelector('#activeRightAnswer');
    let rightAnswerText = rightAnswer.textContent;

    if(ans == rightAnswerText){
        alert("right");
    }
    else{
        alert("wrong");
    }
    //alert(ans+" "+rightAnswerText);
}

/*
50/50 pressed
will then only alow the life line to be used once
when red the life line is not avaibable
*/
function fiftyFifty(){
    if(fiftyFiftyUsed == false){
        let FF = document.querySelector('#fiftyFiftyID');
        FF.style.backgroundColor = 'Red';
        alert("Fifty Fifty");
        fiftyFiftyUsed = true;
    }
    else{
        alert("50/50 Used");
    } 
}

/*
Lucky Guess pressed
will then only alow the life line to be used once
when red the life line is not avaibable
*/
function luckyGuess(){
    if(luckyGuessUsed == false){
        let LC = document.querySelector('#answerA');
        LC.style.backgroundColor = 'Red';
        alert("Lucky Guess");
        let ra = document.querySelector('#answerA')
        
        //sets button invisable
        ra.style.visibility = "hidden";
        luckyGuessUsed = true;
    }
    else{
        alert("Lucky Guess Used");
    } 
}
class Quiz extends Component
{
    constructor (props){
        super(props);
        this.state = {
            questionsData,
            activeQuestion: {},
            nextQuestion: {},
            previousQuestion: {},
            answer: '',
            numOfQuestions:0,
            numOfQuestionsAnswered: 0,
            activeQuestionIndex: 16,
            score: 0
        };
    }

    //will call when component loads
    componentDidMount(){
        const {questionsData, activeQuestion, nextQuestion, previousQuestion, answer} = this.state;
        this.callQuestions(questionsData, activeQuestion, nextQuestion, previousQuestion);
        activeAnswer = answer; 
    }
    //will cann questions from the question array
    callQuestions = (questionsData = this.state.questionsData, activeQuestion, nextQuestion, previousQuestion) => {
        let{activeQuestionIndex} = this.state;

        if(!isEmpty(this.state.questionsData)){
            questionsData = this.state.questionsData;
            activeQuestion = questionsData[activeQuestionIndex];
            nextQuestion = questionsData[activeQuestionIndex +1];
            previousQuestion = questionsData[activeQuestionIndex -1];
            const answer = activeQuestion.answer;

            this.setState({
                activeQuestion,
                nextQuestion,
                previousQuestion,
                answer
            });
        }
    };
    render(){
        const {activeQuestion} = this.state;
        const questionNumber = this.state.activeQuestionIndex + 1;

        return(
            <div className='background'>
            <Fragment>
                <Helmet><h1 className='title'>Quizly</h1></Helmet>
                <div className='questionOptionSection'>
                    <div className='questionBox'>
                        <h6 className='questionText'>Question : {questionNumber}</h6>
                        <h5 className='question'>{activeQuestion.question}</h5>
                        <div className='questionOptionSection'>
                                <p id='answerA' onClick={checkAnswerA} className='questionOption'>{activeQuestion.optionA}</p>
                                <p id='answerB' onClick={checkAnswerB} className='questionOption'>{activeQuestion.optionB}</p>
                        </div>
                        <div className='questionOptionSection'>
                            <p id='answerC' onClick={checkAnswerC} className='questionOption'>{activeQuestion.optionC}</p>
                            <p id='answerD' onClick={checkAnswerD} className='questionOption'>{activeQuestion.optionD}</p>
                        </div>

                        <div className='questionOptionSection'>
                            <p id='fiftyFiftyID' onClick={fiftyFifty} className='lifeLineOption'>50/50</p>
                            <p id='luckyGuessID'  onClick={luckyGuess} className='lifeLineOption'>Lucky Guess</p>
                        </div>
                    </div>
                </div>
            </Fragment>

            <div>
                <footer className='footer'>
                <p>Arthor: Christopher Mullins</p>
                <p>Quizly PPIT</p>
            </footer>
            <label id='activeRightAnswer'>{activeQuestion.answer}</label>
            </div> 
        </div>
        );
    }
}
export default Quiz;