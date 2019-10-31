import React from 'react';

export default class ButtonWithChild extends React.Component {
    render() {
        const { children, informButtonPage } = this.props;

        return (
            <button onClick={() => informButtonPage("Button with Child was clicked")}>{children}</button>
        );
    }
}
