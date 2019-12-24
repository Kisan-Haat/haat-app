import axios from 'axios';

const axiosService = axios.create({
  baseURL: 'https://kissan-haat.herokuapp.com/login',
  timeout: 10000,
  headers: {
    'username': 'admin',
    'password' : 'admin'
  }
});

export default axiosService;