import React from "react";
import ButtonWithProps from "../button/ButtonWithProps";

export default class ThemePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: ""
        }
    }

    submitColorChange = () => {
        this.props.onColorChange(this.state.color);
        this.props.history.push("/");
    }

    render() {
        console.log(this.props);

        return (
            <div>
                <h1>Theme Page</h1>
                <input type="color" onChange={event => this.setState({color: event.target.value})}></input>
                <ButtonWithProps informButtonPage={this.submitColorChange}/>
            </div>
        );
    }
}

