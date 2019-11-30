import React from "react";
import { sendEmail } from "./functions";

class EmailWriteView extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e){
    e.preventDefault();
    const email = {
      recipient: this.state.recipient,
      subject: this.state.subject,
      content: this.state.content
    };
    sendEmail(email).then(res => {
      if(res){ 
          this.props.history.push('/read');
      }
    });
  }

  render() {
      return(
          <div className="WriteEmail">
              <h3>Send an Email</h3>
              <form onSubmit={this.onSubmit} id="sendEmailForm">
                <input type="text" name="recipient" placeholder="Recipents Email" onChange={this.onChange} />
                <input type="text" name="subject" placeholder="subject" onChange={this.onChange} />
                <textarea form="sendEmailForm" rows="5" name="content" placeholder="Email body" onChange={this.onChange} ></textarea>
                <input type="submit" value="Send This" />
              </form>
          </div>
      );
  }
}

export default EmailWriteView;