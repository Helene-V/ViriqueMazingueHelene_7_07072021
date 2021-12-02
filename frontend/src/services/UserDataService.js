import http from '../http-common';


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

/*
const UserDataService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByName
};*/