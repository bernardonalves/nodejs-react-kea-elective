import React from "react";

class Header extends React.Component {
    render() {
        return(
            <div>
                <header className="App-header">
                    <h1>Pigeon Mail</h1>
                    <p id="motto">Wanna send an email to someone but not using your email provider? <br/>That's why we're here!</p>
                </header>
            </div>
        );
    }
}

export default Header;