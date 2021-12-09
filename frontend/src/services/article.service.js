import http from "../http";

const getAll = () => {
  return http.get("/articles");
};

const get = id => {
  return http.get(`/articles/${id}`);
};

const create = data => {
  return http.post("/articles", data);
};

const update = (id, data) => {
  return http.put(`/articles/${id}`, data);
};

const remove = id => {
  return http.delete(`/articles/${id}`);
};

const removeAll = () => {
  return http.delete(`/articles`);
};

const findByTitle = title => {
  return http.get(`/articles?title=${title}`);
};

const ArticleService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default ArticleService;