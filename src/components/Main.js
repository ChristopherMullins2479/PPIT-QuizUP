import React, { Component } from 'react';
import logo from '../assets/Logo.png'
import '../styles/Main.css'

class Main extends Component {
    render() {
        return (
            <div>
                <img height={100} width={100} src={logo} alt="Logo"></img>
                <h1>Welcome To Quizly</h1>
                <div>
                        <button className='StartButton'>Start Quiz</button>
                        <p></p>
                        <button className='button'>Leaderboard</button>
                        <p></p>
                        <button className='button' onClick={genrePressed}>Genre</button>
                </div>
            </div>
        );
    }
}

function genrePressed(){
    alert('You clicked genre!');
}

export default Main;