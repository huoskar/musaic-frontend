import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    // Apply for all requests sent with axios
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    // Delete the token
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;
