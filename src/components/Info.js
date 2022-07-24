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

var htpInfo = ("htp ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed metus tempor, accumsan libero gravida, pretium turpis. Ut aliquet eleifend libero, a pharetra magna semper in. Aliquam sollicitudin blandit augue quis ullamcorper. Aenean faucibus ex in lectus viverra ornare eleifend a massa. Ut at egestas est, sed tincidunt augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc pretium cursus congue. Sed egestas finibus felis, ac porta tellus. Etiam sed sem est. Morbi blandit neque vitae ex placerat efficitur. Donec diam lectus, ultrices fringilla dignissim id, cursus sed odio. Ut malesuada ligula justo, et congue eros suscipit sed." + 

"Morbi ut ante sollicitudin, facilisis dui vel, efficitur ex. Proin arcu leo, pharetra in tellus ac, posuere accumsan nisi. Aliquam tincidunt sodales ullamcorper. In non consequat felis. Nullam aliquam fermentum tristique. Suspendisse id tincidunt tortor, vel hendrerit dolor. Aliquam tristique vestibulum lobortis. Fusce quis porttitor orci, a vulputate sem. Aenean consectetur luctus lorem, in accumsan libero volutpat vel. Sed non augue nibh. Curabitur eu facilisis neque. Proin posuere mattis pharetra. Aliquam mattis convallis erat quis imperdiet. Nam hendrerit, sem ut luctus posuere, eros dui varius tortor, et luctus lorem erat in arcu. Maecenas porta a odio vitae ultrices. Nulla sed ipsum mi. Quisque gravida ex sed ligula hendrerit tempus. Quisque dictum at tortor quis fermentum." +

"Vestibulum mollis et justo a consectetur. Nam eleifend varius elit. Nullam nec dictum enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus eros diam, mollis a ante vel, rutrum tempus ligula. Donec pellentesque interdum lectus, at rhoncus dolor molestie at. Morbi pulvinar velit at sapien tincidunt pharetra id ac est. Proin libero libero, feugiat ut commodo tincidunt, ornare vel libero. Aliquam erat volutpat. In ullamcorper auctor molestie." +

"Ut condimentum quis ex vel sagittis. Mauris ultricies nibh at purus tincidunt efficitur. Duis consequat urna ac mi vehicula aliquet eu sed odio. Suspendisse tincidunt mauris dui, nec vulputate orci eleifend non. Sed finibus turpis ut velit euismod eleifend. In egestas sollicitudin nisl, sit amet fringilla erat euismod at. Nullam posuere scelerisque dui, ut dignissim quam vestibulum vel. Vivamus dapibus urna non est porttitor accumsan quis vitae purus. Proin finibus, ex vitae egestas egestas, nunc justo varius erat, ut fermentum ex eros venenatis mi. Donec ac dui ligula. Nam consectetur lectus sed est pulvinar consequat. Donec tincidunt metus a diam convallis congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sollicitudin, mauris eu ullamcorper molestie, mauris lacus porta ligula, sit amet convallis neque dui eu arcu."
);

var infoInfo = ("Quizly is a Quize game created using the React Framework.\n"+
"This app was created for my Augest PPIT assignment. I chose React as it is a fantastic framework and allows"+
"me to create and easy to use Single page application.");

var genreInfo = ("genre ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed metus tempor, accumsan libero gravida, pretium turpis. Ut aliquet eleifend libero, a pharetra magna semper in. Aliquam sollicitudin blandit augue quis ullamcorper. Aenean faucibus ex in lectus viverra ornare eleifend a massa. Ut at egestas est, sed tincidunt augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc pretium cursus congue. Sed egestas finibus felis, ac porta tellus. Etiam sed sem est. Morbi blandit neque vitae ex placerat efficitur. Donec diam lectus, ultrices fringilla dignissim id, cursus sed odio. Ut malesuada ligula justo, et congue eros suscipit sed." + 

"Morbi ut ante sollicitudin, facilisis dui vel, efficitur ex. Proin arcu leo, pharetra in tellus ac, posuere accumsan nisi. Aliquam tincidunt sodales ullamcorper. In non consequat felis. Nullam aliquam fermentum tristique. Suspendisse id tincidunt tortor, vel hendrerit dolor. Aliquam tristique vestibulum lobortis. Fusce quis porttitor orci, a vulputate sem. Aenean consectetur luctus lorem, in accumsan libero volutpat vel. Sed non augue nibh. Curabitur eu facilisis neque. Proin posuere mattis pharetra. Aliquam mattis convallis erat quis imperdiet. Nam hendrerit, sem ut luctus posuere, eros dui varius tortor, et luctus lorem erat in arcu. Maecenas porta a odio vitae ultrices. Nulla sed ipsum mi. Quisque gravida ex sed ligula hendrerit tempus. Quisque dictum at tortor quis fermentum." +

"Vestibulum mollis et justo a consectetur. Nam eleifend varius elit. Nullam nec dictum enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus eros diam, mollis a ante vel, rutrum tempus ligula. Donec pellentesque interdum lectus, at rhoncus dolor molestie at. Morbi pulvinar velit at sapien tincidunt pharetra id ac est. Proin libero libero, feugiat ut commodo tincidunt, ornare vel libero. Aliquam erat volutpat. In ullamcorper auctor molestie." +

"Ut condimentum quis ex vel sagittis. Mauris ultricies nibh at purus tincidunt efficitur. Duis consequat urna ac mi vehicula aliquet eu sed odio. Suspendisse tincidunt mauris dui, nec vulputate orci eleifend non. Sed finibus turpis ut velit euismod eleifend. In egestas sollicitudin nisl, sit amet fringilla erat euismod at. Nullam posuere scelerisque dui, ut dignissim quam vestibulum vel. Vivamus dapibus urna non est porttitor accumsan quis vitae purus. Proin finibus, ex vitae egestas egestas, nunc justo varius erat, ut fermentum ex eros venenatis mi. Donec ac dui ligula. Nam consectetur lectus sed est pulvinar consequat. Donec tincidunt metus a diam convallis congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sollicitudin, mauris eu ullamcorper molestie, mauris lacus porta ligula, sit amet convallis neque dui eu arcu."
);


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