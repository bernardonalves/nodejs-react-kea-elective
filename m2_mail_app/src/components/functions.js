import axios from 'axios';
axios.defaults.withCredentials = true

export const login = (user) => {
  const api_url = `http://localhost:8080/users/login`;
  let params = new URLSearchParams();
  params.append('email', user.email);
  params.append('password', user.password);
  const options = {
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  }
  return axios.post(api_url, params, options).then(response => {
    console.log(response);
    localStorage.setItem('userToken', response.data.id);
    localStorage.setItem('userName', response.data.name);
    return response.data.code;
  }).catch( err => {
    console.log(err);
  });
}

export const getEmails = () => {
  const api_url = `http://localhost:8080/email/fetch`;
  const options = {
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  }
  return axios.get(api_url, options).then(response => {
    return JSON.stringify(response.data);
  }).catch( err => {
    console.log(err);
  });
}

export const sendEmail = (email) => {
  const api_url = `http://localhost:8080/email/send`;
  let params = new URLSearchParams();
  params.append('recipient', email.recipient);
  params.append('subject', email.subject);
  params.append('content', email.content)
  const options = {
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  }
  return axios.post(api_url, params, options).then(response => {
    return response.data.code;
  }).catch( err => {
    console.log(err);
  });
}