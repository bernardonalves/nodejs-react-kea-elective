import React from 'react';
import './App.css';
import './Secrets.js';

class  App extends React.Component  {
  state = {
    emailRecipint: '',
    emailSender: '',
    emailSubject: '',
    emailContent: ''
  };

  sendEmail = () => {
    let api_url = `http://localhost:4000/send-email?`;
    fetch();
  }
}

export default App;
