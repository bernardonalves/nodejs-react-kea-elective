import React from "react";
import DisplayWeather from "./DisplayWeather"

class WeatherCph extends React.Component {

    render() {
        if(this.props.state.location.city !== "Copenhagen") this.props.getWeather()
        return(
            <div>
                <DisplayWeather information={this.props.state} />          
            </div>
        );
    }
}

export default WeatherCph;