import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ArticleService from '../../services/article.service';

const Article = (props) => {
  const navigate = useNavigate();
  navigate('/articles');
      //const { id } = props.match.params
      
  
  const initialArticleState = {
    id: null,
    title: "",
    description: "",
    published: false
  };
  const [currentArticle, setCurrentArticle] = useState(initialArticleState);
  const [message, setMessage] = useState("");

  const getArticle = id => {
    ArticleService.get(id)
      .then(response => {
        setCurrentArticle(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getArticle(props.match.params.id);
  }, [props.match.params.id]);


  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentArticle({ ...currentArticle, [name]: value });
  };

  const updatePublished = status => {
    const data = {
      id: currentArticle.id,
      title: currentArticle.title,
      description: currentArticle.description,
      published: status
    };

    ArticleService.update(currentArticle.id, data)
      .then(response => {
        setCurrentArticle({ ...currentArticle, published: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateArticle = () => {
    ArticleService.update(currentArticle.id, currentArticle)
      .then(response => {
        console.log(response.data);
        setMessage("The post was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteArticle = () => {
    ArticleService.remove(currentArticle.id)
      .then(response => {
        console.log(response.data);
        navigate('/articles')
        //props.history.push("/articles");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentArticle ? (
        <div className="edit-form">
          <h4>Article</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentArticle.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentArticle.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentArticle.published ? "Published" : "Pending"}
            </div>
          </form>

          {currentArticle.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )}

          <button className="badge badge-danger mr-2" onClick={deleteArticle}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateArticle}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Post...</p>
        </div>
      )}

    </div>
  );
};

export default Article;

