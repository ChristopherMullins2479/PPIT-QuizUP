import React, { Component } from 'react';
import '../styles/Info.css'
import {useState} from 'react';

//const [infoOutput, setInfoOutput] = useState("Tester");

// fetch(howToPlayText)
//   .then(r => r.text())
//   .then(text => {
//     console.log('"test',text)
//     htpText = text.text; 
// });

var htpInfo = ("You will start the game by clicking start. The first question will then come up."+
"Pick and answer and gain a point , pick a wrong answer and lose a point. a wrong answer will also cause"+
"you to lose a life. After losing three lives the game will be over."
);

var infoInfo = ("Quizly is a Quize game created using the React Framework.\n"+
"This app was created for my Augest PPIT assignment. I chose React as it is a fantastic framework and allows"+
"me to create and easy to use Single page application.");

var genreInfo = ("genre will be added later");


function Info() 
{
    //CHANGES OUTPUT 
    const [infoOutput, setInfoOutput] = useState("Please click on an option");

        return(
            <div className='background'>
                <h1 id='tester' className='title'>Welcome to Quizly</h1>
                <h2 className='title'>Quizly is a General Knowledge based quiz</h2>
                <div>
                    <button onClick={() => setInfoOutput(htpInfo)} className='menueButton'>How to Play</button>
                    <button onClick={() => setInfoOutput(infoInfo)} className='menueButton'>About</button>
                    <button onClick={() => setInfoOutput(genreInfo)} className='menueButton'>Genres</button>
                    <p></p>
                    <output className='infoPannel'>{infoOutput}</output>
                </div>  
                
                <footer className='footer'>
                    <p>Arthor: Christopher Mullins</p>
                    <p>Quizly PPIT</p>
                </footer>
            </div>  
        );
}

export default Info;