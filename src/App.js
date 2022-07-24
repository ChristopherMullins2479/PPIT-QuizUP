import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import Quiz from './components/Quizly'
import Scores from './components/Scores'
import Genre from './components/Genre';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Info from './components/Info';
import logo from './assets/Logo.png'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar class bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/"><img src={logo} alt="Logo"></img></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Main</Nav.Link>
              <Nav.Link href="/quiz">Start</Nav.Link>
              <Nav.Link href="/scores">Scores</Nav.Link>
              <Nav.Link href="/genre">Genre</Nav.Link>
              <Nav.Link href="/info">Info</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Switch>
          <Route path="/" exact><Main /></Route>
          <Route path="/quiz" exact><Quiz /></Route>
          <Route path="/scores" exact><Scores /></Route>
          <Route path="/genre" exact><Genre /></Route>
          <Route path="/info"><Info></Info></Route>
        </Switch>
      </div>
      </Router>
    );
  }
}
export default App;
