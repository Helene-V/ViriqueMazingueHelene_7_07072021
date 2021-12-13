import React, { useState, useEffect  } from "react";
import ArticleService from "../../services/article.service";
import { Link } from "react-router-dom";

const ArticlesList = () => {

  const [articles, setArticles] = useState([]);
  const [currentArticle, setCurrentArticle] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveArticles();
  }, []);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveArticles = () => {
    ArticleService.getAll()
      .then(response => {
        setArticles(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveArticles();
    setCurrentArticle(null);
    setCurrentIndex(-1);
  };

  const setActiveArticle = (article, index) => {
    setCurrentArticle(article);
    setCurrentIndex(index);
  };

  const removeAllArticles = () => {
    ArticleService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByTitle = () => {
    ArticleService.findByTitle(searchTitle)
      .then(response => {
        setArticles(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      <div className="col-md-6">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Rechercher par titre"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByTitle}
            >
              Rechercher
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Bonne lecture</h4>

        <ul className="list-group">
          {articles &&
            articles.map((article, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveArticle(article, index)}
                key={index}
              >
                {article.title + ' : '} 
                {article.description}
              </li>
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllArticles}
        >
          Tout supprimer
        </button>
      </div>
      <div className="col-md-6">
        {currentArticle ? (
          <div>
            <h4>Article</h4>
            <div>
              <label>
                <strong>Title:</strong>
              </label>{" "}
              {currentArticle.title}
            </div>
            <div>
              <label>
                <strong>Description:</strong>
              </label>{" "}
              {currentArticle.description}
            </div>
            <div>
              <label>
                <strong>Status:</strong>
              </label>{" "}
              {currentArticle.published ? "Published" : "Pending"}
            </div>    

            <Link
              className="badge badge-warning"
              to={`/articles/${currentArticle.id}`}
              key={currentArticle.id}
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Sélectionner votre article</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticlesList;