import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { postRequest } from './components/functions';
//import './Secrets.js';
import Header from './components/header';
import LoginView from './components/loginView'

class  App extends React.Component  {
  
  render() {
    return(
      <div className="App">
        <Header/>
        <Router>
          <>
          <nav>
            <ul>
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/email">Email</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" />
            <Route exact path="/email" />
          </Switch>
          </>
        </Router>
        <LoginView/>
      </div>
    );
  }
}

export default App;
