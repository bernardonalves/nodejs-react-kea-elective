import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import Header from './components/header';
import LoginView from './components/loginView';
import EmailView from './components/listEmail';
import EmailWriteView from './components/writeEmail';

class App extends React.Component  {
  render() {
    return(
      <div className="App">
        <Header/>
        <Router>
          <nav>
            <ul>
              <li><Link to="/">Login</Link></li>
              <li><Link to="/read">Read Email</Link></li>
              <li><Link to="/write">Write Email</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={ LoginView } />
            <Route exact path="/read" component={ EmailView } />
            <Route exact path="/write" component={ EmailWriteView } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
