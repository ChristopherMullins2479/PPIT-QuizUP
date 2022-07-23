import React, { Component } from 'react';
import logo from '../assets/Logo.png'
import backGround from '../assets/Quizlybackground.jpg'
import '../styles/Main.css'
import {BrowserRouter as Router} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Genre from './Genre';
import { useHistory } from 'react-router-dom';

function Main (){
        return (
            <div className='background'>
                <img height={200} width={200} src={logo} alt="Logo"></img>
                <h1 className='title'>Welcome To Quizly</h1>

                {/* <div>
                        <button className='startButton' onClick={navigateToQuiz}>Start Quiz</button>
                        <p></p>
                        <button className='mainMenueButton' onClick={navigateToLeader}>Leaderboard</button>
                        <p></p>
                        <button className='mainMenueButton' onClick={navigateToGenre}>Genre</button>
                </div> */}

                <footer className='footer'>
                    <p>Arthor: Christopher Mullins</p>
                    <p>Quizly PPIT</p>
                </footer>
                
                
            </div>
        );
    }

export default Main;