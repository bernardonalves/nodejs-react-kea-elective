import React from 'react';

class Profile extends React.Component{
    render(){
        const hobbies = this.props.hobbylist;
        return(
            <>
            <header className="App-header">
                <img src={this.props.img} className="App-logo" alt="profile-pic" />
                <h1>{this.props.name}</h1>
                <h3>{this.props.email}</h3>
                <p>I like to { hobbies }</p>
                <a className="App-link" href="https://google.pt"
                target="_blank" rel="noopener noreferrer">
                just click me already</a>
            </header>
            </>
        )
    }

}

export default Profile;