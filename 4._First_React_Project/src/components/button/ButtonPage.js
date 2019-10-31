import React from 'react';
import ButtonWithProps from './ButtonWithProps';
import "./ButtonPage.css"
import ButtonWithChild from './ButtonWithChild';

export default class ButtonPage extends React.Component {
  handleButtonClicks = (text) => {
    console.log(text);
  };

  render() {
    return (
        <div>
            This is the button page.
            <ButtonWithProps informButtonPage={this.handleButtonClicks} />
            <ButtonWithProps buttonText="This is my custom button text" customStyle={{backgroundColor: "red"}} informButtonPage={this.handleButtonClicks}/>
            <ButtonWithProps buttonText="This is another button" customStyle={{backgroundColor: "blue"}} informButtonPage={this.handleButtonClicks}/>

            <ButtonWithChild informButtonPage={this.handleButtonClicks} >
              This is a child
            </ButtonWithChild>
        </div>
    );
  }
}
