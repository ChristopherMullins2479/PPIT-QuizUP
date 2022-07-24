import React, { Component, Fragment } from 'react';
import {Helmet} from 'react-helmet'
import backGround from '../assets/Quizlybackground.jpg'
import '../styles/Quizly.css'

function test(){
    console.log(test);
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
                                <p className='questionOption'>1998</p>
                                <p className='questionOption'>1994</p>
                        </div>
                        <div className='questionOptionSection'>
                            <p className='questionOption'>1996</p>
                            <p className='questionOption'>2000</p>
                        </div>

                        <div className='questionOptionSection'>
                            <p className='lifeLineOption'>50/50</p>
                            <p onClick={test} className='lifeLineOption'>Lucky Guess</p>
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