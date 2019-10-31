import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WeatherCph from './components/WeatherCph';
import WeatherFinder from './components/WeatherFinder';

const API_KEY = "c6a0aceb8fb634d61bd199c1063499ef";

class App extends React.Component {

  state = {
    weather: {
      temperature: undefined,
      humidity: undefined,
      description: undefined
    },
    location: {
      country: undefined,
      city: undefined
    },
    error: undefined
  };
  
  getWeather = async (event) => {
    let city = "Copenhagen";
    let country = "DK"
    if(event){
      event.preventDefault();
      city = event.target.elements.city.value;
      country = event.target.elements.country.value;
    }
    let api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`
    const api_call = await fetch(api_url);
    const data = await api_call.json();
    if(city && country && data.cod === 200){
      console.log(data)
      // Setting variables in state
      this.setState({
        weather: {
          temperature: data.main.temp,
          humidity: data.main.humidity,
          description: data.weather[0].description
        },
        location: {
          country: data.sys.country,
          city: data.name
        },
        error: undefined
      });
    }
    else{
      this.setState({
        weather: {
          temperature: "--",
          humidity: "--",
          description: "--"
        },
        location: {
          country: "--",
          city: "--"
        },
        error: "The values are empty or invalid. Try again."
      });
    }
  }

  weatherFinderReturn = (data) => {

  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Router>
          <div className="entire-app">
          <nav>
              <ul>
                <li>
                    <Link to="/">Copenhagen Weather</Link>
                </li>
                <li>
                    <Link to="/finder">The Weather Finder</Link>
                </li>
              </ul>
          </nav>
          <Switch>
              <Route exact path="/" component={(props) => <WeatherCph {...props} getWeather={this.getWeather} state={this.state} />} />
              <Route path="/finder" component={(props) => <WeatherFinder {...props} getWeather={this.getWeather} state={this.state} />}  />            
          </Switch>
          </div>
      </Router>
      </div>
    );
  }
}

export default App;
