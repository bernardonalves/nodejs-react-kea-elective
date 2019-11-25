state = {
    emailRecipint: '',
    emailSender: '',
    emailSubject: '',
    emailContent: ''
  };

  sendEmail = () => {
    let api_url = `http://localhost:8080/send-email`;
    postRequest(api_url, {
      recipient: this.state.emailRecipint, 
      subject: this.state.emailSubject, 
      content: this.state.emailContent
    });
  }