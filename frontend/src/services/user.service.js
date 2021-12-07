import axios from "axios";
import authHeader from "./auth.headers";
const API_URL = "http://localhost:3030/api/content/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};


const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const UserService = {
  getPublicContent,
  getUserBoard,
  getAdminBoard,
};

export default UserService;

/*
TEST
import http from '../http-common' = axios;

//const getAll = () => {
//  return http.get("/users");
//};

const get = id => {
  return http.get(`/users/${id}`);
};

const create = data => {
  return http.post("/users", data);
};

const update = (id, data) => {
  return http.put(`/users/${id}`, data);
};

const remove = id => {
  return http.delete(`/users/${id}`);
};

//const removeAll = () => {
//  return http.delete(`/users`);
//};

const findByName = name => {
  return http.get(`/users?name=${name}`);
};

const UserDataService = {
  get,
  create,
  update,
  remove,
  findByName
};

export default UserDataService;
*/
