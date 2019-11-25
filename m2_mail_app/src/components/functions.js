export const postRequest = async (url, data = {}) => {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {'content-type': 'application/x-www-form-urlencoded'},
      body: JSON.stringify(data)
    });
    return await response.json();
};

//export default postRequest;