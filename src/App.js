import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Main from './components/Main';
import Footer from './components/footer';
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

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">Quiz Up</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/info">Info</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Switch>
          <Route path="/" exact><Main /></Route>
          <Route path="/create"><Create></Create></Route>
          <Route path="/info"><Info></Info></Route>
        </Switch>
      </div>
      </Router>
    );
  }
}
export default App;
