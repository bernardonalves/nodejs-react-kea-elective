import React from "react";
import Profile from './Profile';

export default class ProfilePage extends React.Component {
    render() {
        const hobbies = ["Knitting", "Gaming", "Bird Watching"];

        const profileOne = {
            name: "hello123456",
            age: "61",
            img: "http://placeimg.com/640/480/any",
            hobbies: hobbies
        };
    
        const profileTwo = {
          name: "Anders",
          age: "6",
          img: "http://placeimg.com/640/480/any",
          hobbies: hobbies
      };
    
        const profiles = [profileOne, profileTwo];

        return (
            <div className="App App-header">
            {
            profiles.map((profile, index) => {
                return <Profile key={"profile" + index} profileInfo={profile} />
            })
            }
            </div>
        );
    }
}

