import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

import './Article.css';

function Article() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState([]);

    let history = useHistory();

    const nouvelArticle = () => {

        const formData = new FormData();
        formData.append('file', image[0]);
        formData.append('upload', '');
        axios.post(
            ``, formData)
            .then((response) => {
                const fileName = response.data.public_id;
                axios.post("http://localhost:3000/article", {
                    title: title,
                    description: description,
                    image: fileName,
                    author: localStorage.getItem('email'),
            })
            .then(() => {
                history.push("/article")
            })
            });
        };

    return (
        <div className="Article">
            <h1>Que souhaitez-vous partager aujourd'hui?</h1>
            <div className="ArticleForm">
                <input
                    className="Title"
                    type="text"
                    placeholder="Titre"
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />
                <input
                    className="Description"
                    type="text"
                    placeholder="Écrivez votre post"
                    onChange={(event) => {
                        setDescription(event.target.value);
                    }}
                />
                <input
                    type="file"
                    onChange={(event) => {
                        setImage(event.target.files);
                    }}
                />
            </div>
            <div>
                    <button className="Share" onClick={nouvelArticle}>Partager</button>
                </div>
            <h2>Fil d'actualité</h2>
            <div className="Post">
            </div>
        </div>
    )
}

export default Article
