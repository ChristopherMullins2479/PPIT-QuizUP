import React, { Component } from 'react';
import Movies from './movies';
import axios from 'axios';

class Info extends Component
{
    render(){
        return(
            <div>
                <h1>Welcome to Quizly</h1>
                <h2>Quizly is a General Knowledge based quiz</h2>
            </div>
        );
    }
}
export default Info;