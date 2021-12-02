import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-type": "application/json"
  }
});


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