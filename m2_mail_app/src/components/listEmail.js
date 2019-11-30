import React from "react";
import { JsonToTable } from "react-json-to-table";
import { getEmails } from "./functions";

class EmailView extends React.Component {
    constructor() {
        super();
        this.state = {}
    }
    async componentDidMount() {
        const emails = await getEmails();
        let newEmails = JSON.parse(emails);
        this.setState({ emails: newEmails });
    }
    render() {
        const username = localStorage.getItem('userName');
        const usertoken = localStorage.getItem('userToken');
        
        return(
            <div>
                <h3>Checking email sent from: {username} (id:{usertoken})</h3>
                <JsonToTable json={this.state.emails} />
            </div>
        );
    }
}

export default EmailView;