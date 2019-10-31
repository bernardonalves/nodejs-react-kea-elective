import React from "react";
import logo from "../logo.svg";

class Header extends React.Component {
    render() {
        return(
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>Da Weatha</h1>
                    <p id="motto">When you're too lazy to look out the window!</p>
                </header>
            </div>
        );
    }
}

export default Header;