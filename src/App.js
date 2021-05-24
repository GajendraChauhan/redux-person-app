import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Persons from './components/person/Persons';
import Display from './components/displayPerson/Display';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <div className="topnav">
            <nav>
            <Link to="/">Home</Link>
            <Link to="/person">Person</Link>
            <Link to="/display">Display Person</Link>
            </nav>
          </div>
          <Switch>
            <Route path="/person">
              <Persons />
            </Route>
            <Route path="/display">
              <Display />
            </Route>
            <Route path="/">
              <h1>Welcome to the Home page...</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
