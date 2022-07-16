import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
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
import Create from './components/create';
import logo from './assets/Logo.png'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar bg="primary" variant="light">
          <Container>
            <Navbar.Brand href="/"><img src={logo} alt="Logo"></img></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Main</Nav.Link>
              <Nav.Link href="/info">Info</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Switch>
          <Route path="/" exact><Main /></Route>
          <Route path="/info"><Info></Info></Route>
        </Switch>
      </div>
      </Router>
    );
  }
}
export default App;
