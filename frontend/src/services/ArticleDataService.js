import http from '../http-common';


const getAll = () => {
  return http.get("/article");
};

const get = id => {
  return http.get(`/article/${id}`);
};

const create = data => {
  return http.post("/article", data);
};

const update = (id, data) => {
  return http.put(`/article/${id}`, data);
};

const remove = id => {
  return http.delete(`/article/${id}`);
};

const removeAll = () => {
  return http.delete(`/article`);
};

const findByTitle = title => {
  return http.get(`/article?title=${title}`);
};

const ArticleDataService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};


export default ArticleDataService;