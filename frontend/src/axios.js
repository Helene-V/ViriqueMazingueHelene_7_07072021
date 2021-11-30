import axios from "axios";

const axios = axios.create({
    baseURL: "http://localhost:3000",
});

export default axios;


// POST request
/*axios({
    method: 'post',
    url: '/register',
    data: {
      email: '',
      password: ''
    }
  });*/

//https://github.com/axios/axios#axios-api