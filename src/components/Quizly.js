import React, { Component, Fragment } from 'react';
import {Helmet} from 'react-helmet'
import backGround from '../assets/Quizlybackground.jpg'
import '../styles/Quizly.css'
//import 'react-toastify/dist/ReactToastify.css';
import questionsData from '../data/questions.json'
import isEmpty from '../utils/isEmpty';
import leaderBoard from '../data/leaderBoard.json'

//variables 
var luckyGuessUsed = false;
var fiftyFiftyUsed = false;
var numberOfRounds = 10;
var name = "";

var activeAnswer;

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
            activeQuestionIndex: 0,
            score: 0,
            lives: 3
        }
    }

    //will call when component loads
    componentDidMount(){
        const {questionsData, activeQuestion, nextQuestion, previousQuestion, answer} = this.state;
        //this.playRound();
        this.callQuestions(questionsData, activeQuestion, nextQuestion, previousQuestion);
        activeAnswer = answer;
        let gb = document.querySelector('#gameoverBox'); 
        gb.style.visibility = "hidden";

        let save =  document.querySelector('#savedMessage');
        save.style.visibility = 'hidden';
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

    // playRound = () => {
    //     let counter = 1;
    //     while(counter <= numberOfRounds){
    //         console.log("Round: "+counter);
    //         counter ++;
    //     }
    // }

    checkAnswerA = () => {
        //alert("answer: A");
        let answerA =  document.querySelector('#answerA');
        let A = answerA.textContent;
        this.checkAnswer(A,answerA);
    }
    
    checkAnswerB = () => {
        //alert("answer: B");
        let answerB =  document.querySelector('#answerB');
        let B = answerB.textContent;
        this.checkAnswer(B,answerB);
    }
    
    checkAnswerC = () => {
        //alert("answer: C");
        let answerC =  document.querySelector('#answerC');
        let C = answerC.textContent;
        this.checkAnswer(C,answerC);
    }
    
    checkAnswerD = () => {
        //alert("answer: D");
        let answerD =  document.querySelector('#answerD');
        let D = answerD.textContent;
        this.checkAnswer(D,answerD);
    }
    
    checkAnswer = (ans,answerBox) => {
        let rightAnswer =  document.querySelector('#activeRightAnswer');
        let rightAnswerText = rightAnswer.textContent;
    
        if(ans == rightAnswerText){
            answerBox.style.backgroundColor = 'green';
            this.setState(lastState =>({
                score: lastState.score +1,
                activeQuestionIndex: lastState.activeQuestionIndex +1,
                numOfQuestionsAnswered: lastState.numOfQuestionsAnswered +1
            }), () =>{
                //this.callQuestions(this.state.questionsData, this.state.activeQuestion, this.state.nextQuestion, this.state.previousQuestion);
                setTimeout(() => {this.callQuestions(this.state.questionsData, this.state.activeQuestion, this.state.nextQuestion, this.state.previousQuestion); this.reset(); }, 500);
                //this.reset();
            });
        }
        else{
            answerBox.style.backgroundColor = 'red';
            this.setState(lastState =>({
                lives: lastState.lives -1
            }), () =>{
                if(this.state.lives < 0){
                    this.gameover();
                }
                
            });
            
        }
        //alert(ans+" "+rightAnswerText);
    }

    reset(answerbox){
        let A =  document.querySelector('#answerA');
        let B =  document.querySelector('#answerB');
        let C =  document.querySelector('#answerC');
        let D =  document.querySelector('#answerD');

        A.style.backgroundColor = 'gray';
        B.style.backgroundColor = 'gray';
        C.style.backgroundColor = 'gray';
        D.style.backgroundColor = 'gray';

        A.style.visibility = 'visible';
        B.style.visibility = 'visible';
        C.style.visibility = 'visible';
        D.style.visibility = 'visible';
        
    }

    gameover(){
        let gb = document.querySelector('#gameoverBox'); 
        gb.style.visibility = "visible";

        let qb = document.querySelector('#questionBox'); 
        qb.style.visibility = "hidden";

        let A =  document.querySelector('#answerA');
        let B =  document.querySelector('#answerB');
        let C =  document.querySelector('#answerC');
        let D =  document.querySelector('#answerD');

        A.style.visibility = 'hidden';
        B.style.visibility = 'hidden';
        C.style.visibility = 'hidden';
        D.style.visibility = 'hidden';
        
    }
    
    /*
    50/50 pressed
    will then only alow the life line to be used once
    when red the life line is not avaibable
    */
    fiftyFifty = () => {
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
    luckyGuess = () => {
        if(luckyGuessUsed == false){
            let raA = document.querySelector('#answerA');
            let raB = document.querySelector('#answerB');
            let raC = document.querySelector('#answerC');
            let raD = document.querySelector('#answerD');
            let rightAnswer =  document.querySelector('#activeRightAnswer');
            let rightAnswerText = rightAnswer.textContent;
    
            if(raA.textContent != rightAnswerText){
                raA.style.visibility = "hidden";
            }
            if(raB.textContent != rightAnswerText){
                raB.style.visibility = "hidden";
            }
            if(raC.textContent != rightAnswerText){
                raC.style.visibility = "hidden";
            }
            if(raD.textContent != rightAnswerText){
                raD.style.visibility = "hidden";
            }
    
            let LC = document.querySelector('#luckyGuessID');
            LC.style.backgroundColor = 'Red';
            alert("Lucky Guess");
            luckyGuessUsed = true;
        }
        else{
            alert("Lucky Guess Used");
        } 
    }

    saveScore(){
        const fs = require('fs');

        let save =  document.querySelector('#savedMessage');
        save.style.visibility = 'visible';

        let name = document.getElementById('userName').value;
        let score = document.getElementById('score').textContent;
        
        const savedScore = {
            "name": name,
            "score": score
         };

    }
    
    render(){
        const {activeQuestion} = this.state;
        const questionNumber = this.state.activeQuestionIndex + 1;

        return(
            <div className='background'>
            <Fragment>
                <Helmet><h1 className='title'>Quizly</h1></Helmet>
                <div id='questionBox' className='questionOptionSection'>
                    <div id='questionBoxOptions' className='questionBox'>
                        <h6 className='questionText'>Question : {activeQuestion.questionIndex}</h6>
                        <h5 className='question'>{activeQuestion.question}</h5>
                        <div className='questionOptionSection'>
                                <p id='answerA' onClick={this.checkAnswerA} className='questionOption'>{activeQuestion.optionA}</p>
                                <p id='answerB' onClick={this.checkAnswerB} className='questionOption'>{activeQuestion.optionB}</p>
                        </div>
                        <div className='questionOptionSection'>
                            <p id='answerC' onClick={this.checkAnswerC} className='questionOption'>{activeQuestion.optionC}</p>
                            <p id='answerD' onClick={this.checkAnswerD} className='questionOption'>{activeQuestion.optionD}</p>
                        </div>

                        <div className='questionOptionSection'>
                            <h6 className='scoreText'>Lives: {this.state.lives}</h6>
                            <p id='fiftyFiftyID' onClick={this.fiftyFifty} className='lifeLineOption'>50/50</p>
                            <p id='luckyGuessID'  onClick={this.luckyGuess} className='lifeLineOption'>Lucky Guess</p>
                            <h6 className='scoreText'>Score: {this.state.score}</h6>
                        </div>
                    </div>
                </div>
            </Fragment>
            <div id='gameoverBox' className='questionOptionSection'>
                <div className='questionBox'>
                    <h2>Game Over</h2>
                    <h4>You Scored: <h4 id='score'>{this.state.score}</h4></h4>
                    <label>Enter Your Name: </label>
                    <input id='userName'></input>
                    <p></p>
                    <button onClick={this.saveScore}>Save and Exit</button>
                    <p></p>
                    <h5 id='savedMessage'>Score Saved Please Press Home</h5>
                </div>
            </div>

            <div>
                <footer className='footer'>
                <p>Author: Christopher Mullins</p>
                <p>Quizly PPIT</p>
            </footer>
            <label id='activeRightAnswer'>{activeQuestion.answer}</label>
            </div> 
        </div>
        );
    }
}
export default Quiz;