import React from "react";
import './css/weather-icons.min.css';

class DisplayWeather extends React.Component {
    
    render() {
        
        const { city, country } = this.props.information.location;
        const { error } = this.props.information;
        const { temperature, description } = this.props.information.weather;
        
        return(
            <div className="weathercontainer">
                { description && <i id="weathericon" class={`wi ${description.toString().indexOf("cloud") > -1 ? "wi-cloudy" : description.toString().indexOf("drizzle") > -1 ? "wi-rain-mix" : "wi-sunny"}`} ></i> }
                { description && <p id="descriptiontext">{description}</p> }
                { temperature && <p id="temperaturetext">{temperature.toString().substring(0,2)}<sup>ºC</sup></p> }
                { city && country && <p id="locationtext">{city}, {country}</p> }
                { error && <p>{error}</p> }
            </div>
        );
    }
}

export default DisplayWeather;