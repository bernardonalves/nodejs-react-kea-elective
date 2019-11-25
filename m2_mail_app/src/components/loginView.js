import React from "react";

class LoginView extends React.Component {
    render() {
        return(
            <div className="Login">
                <h3>Login</h3>
                <form >
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <br/>
                    <input type="submit" value="Login now!" />
                </form>
            </div>
        );
    }
}

export default LoginView;