import React, { Component } from 'react';
import Movies from './movies';
import '../styles/Info.css'
import {useState} from 'react';
import howToPlayText from '../data/howToPlay.txt'

//const [infoOutput, setInfoOutput] = useState("Tester");


function Info() 
{
    const [infoOutput, setInfoOutput] = useState("Tester");
   
        return(
            <div className='background'>
                <h1 id='tester' className='title'>Welcome to Quizly</h1>
                <h2 className='title'>Quizly is a General Knowledge based quiz</h2>
                <div>
                    <button onClick={() => setInfoOutput("howToPlayText")} className='menueButton'>How to Play</button>
                    <button onClick={() => setInfoOutput("About")} className='menueButton'>About</button>
                    <button onClick={() => setInfoOutput("Genre")} className='menueButton'>Genres</button>
                    <p></p>
                    <text className='infoPannel'>{infoOutput}</text>
                </div>  
                
                <footer className='footer'>
                    <p>Arthor: Christopher Mullins</p>
                </footer> 
            </div>  
        );
}


function htpPressed(){
}
export default Info;