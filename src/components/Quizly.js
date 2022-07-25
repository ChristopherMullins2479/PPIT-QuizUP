import React, { Component, Fragment } from 'react';
import {Helmet} from 'react-helmet'
import backGround from '../assets/Quizlybackground.jpg'
import '../styles/Quizly.css'
//import 'react-toastify/dist/ReactToastify.css';

function checkAnswer(){
    alert("answer: ");
}

function fiftyFifty(){
    alert("50/50");
}

function luckyGuess(){
    let LC = document.querySelector('#tester');
    LC.style.backgroundColor = 'Red';
    alert("Lucky Guess");
    
}
class Quiz extends Component
{
    render(){
        return(
            <div className='background'>
            <Fragment>
                <Helmet><h1 className='title'>Quizly</h1></Helmet>
                <div className='questionOptionSection'>
                    <div className='questionBox'>
                        <h5 className='question'>Pokemon was released in what year in Europe?</h5>
                        <div className='questionOptionSection'>
                                <p id='A' className='questionOption'>1998</p>
                                <p className='questionOption'>1994</p>
                        </div>
                        <div className='questionOptionSection'>
                            <p className='questionOption'>1996</p>
                            <p className='questionOption'>2000</p>
                        </div>

                        <div className='questionOptionSection'>
                            <p onClick={fiftyFifty} className='lifeLineOption'>50/50</p>
                            <p id='tester' onClick={luckyGuess} className='lifeLineOption'>Lucky Guess</p>
                        </div>
                    </div>
                </div>
            </Fragment>

            <div>
                <footer className='footer'>
                <p>Arthor: Christopher Mullins</p>
                <p>Quizly PPIT</p>
            </footer>
            </div> 
        </div>
        );
    }
}
export default Quiz;