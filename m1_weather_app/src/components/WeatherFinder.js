import React from "react";
import DisplayWeather from "./DisplayWeather"

class WeatherFinder extends React.Component {
    render() {
        return(
            <div>
                <form onSubmit={this.props.getWeather}>
                    <input type="text" name="city" placeholder="city"/>
                    <input type="text" name="country" placeholder="country"/>
                    <button>Grep Weather</button>
                </form>
                <DisplayWeather information={this.props.state} />
            </div>
        );
    }
}

export default WeatherFinder;