import React, { Component } from 'react';
import logo from '../assets/Logo.png'
import backGround from '../assets/Quizlybackground.jpg'
import '../styles/Main.css'

class Main extends Component {
    render() {
        return (
            <div className='background'>
                <img height={100} width={100} src={logo} alt="Logo"></img>
                <h1 className='title'>Welcome To Quizly</h1>
                <div>
                        <button className='startButton'>Start Quiz</button>
                        <p></p>
                        <button className='mainMenueButton'>Leaderboard</button>
                        <p></p>
                        <button className='mainMenueButton' onClick={genrePressed}>Genre</button>
                </div>
                <footer className='footer'>
                    <p>Arthor: Christopher Mullins</p>
                    <p>Quizly PPIT</p>
                </footer>
            </div>
        );
    }
}

function genrePressed(){
    alert('You clicked genre!');
}

export default Main;