import React, { Component } from 'react';
import Movies from './movies';
import '../styles/Info.css'

 var infoOutput = "How to Play"

class Info extends Component
{
    render(){
        return(
            <div>
                <h1>Welcome to Quizly</h1>
                <h2>Quizly is a General Knowledge based quiz</h2>
                <div>
                    <button className='button' onClick={htpPressed}>How to Play</button>
                    <button className='button' onClick={htpPressed}>About</button>
                    <button className='button' onClick={htpPressed}>Genres</button>
                </div>   
            </div>  
        );
    }
}


function htpPressed(){
    infoOutput = "Tester";
    alert('You clicked genre!');
}
export default Info;