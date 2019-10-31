import React from 'react';

export default class ButtonWithProps extends React.Component {
    handleClick = (event) => {
        this.props.informButtonPage("Button with Props was clicked");
    }

    render() {
        const { buttonText, customStyle } = this.props;

        return (
            <button onClick={this.handleClick} style={customStyle}>{buttonText ? buttonText : "Submit"}</button>
            // <button className="btn pink">{buttonText}</button>
        );
    }
}