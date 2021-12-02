/*

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import ThumbUpAltRounded from '@material-ui/icons/ThumbUpAltRounded';
//import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import './Article.css';

function Article() {

    const [articles, setArticles] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState([]);   
    const [likes, setLikes] = useState([]);

    let history = useHistory();

// NOUVEL ARTICLE

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


// AFFICHAGE/RECUPERATION DES ARTICLES DEJA ECRITS ET DES LIKES
/*
    useEffect(() => {
        axios.get("http://localhost:3000/article")
        .then((response) => {
            setArticles(response.data);
            let numberOfLikes = [];
            response.data.map((val) => {
                numberOfLikes.push(val.likes)
            });
            setLikes(numberOfLikes);
        });
    }, []);
*/
/*
// GESTION DES LIKES

    const likeThePost = (id) => {
        axios.post("http://localhost:3000/article/like", {
            userLiking: localStorage.getItem("email"),
            postId: id,
        })
        .then((response) => {
            console.log('like ok');
        });
    };


    return (
        <div className="Article">
            <h1 className="ClassicTitle">Que souhaitez-vous partager aujourd'hui ?</h1>
            <section>
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
                    className="Parcourir"
                    type="file"
                    onChange={(event) => {
                        setImage(event.target.files)
                    }}
                />

            </div>
            <div className="ClassicButton">
                    <button className="Share" onClick={nouvelArticle}>Partager</button>
                </div>
                </section>
            <section>
                <h3>Fil d'actualité</h3>                
                { articles.map((val, key) => {
                    return (
                        <div className="Post">
                            <div className="Post-title">{ val.title }</div>
                            <div className="Post-image">{ val.image }</div>
                            <div className="Post-content">{ val.description }</div>
                        </div>
                    );                    
                })} 
                <div className="Opinion">
                    <ThumbUpAltRounded
                        id="Like-btn"
                        //onClick={() => {
                        //likeThePost(val.id);
                        //const counterLikes = likes
                        //counterLikes[key] = counterLikes[key] + 1
                        //setLikes(counterLikes);
                        //}}
                        //{val.likes}
                    />
                    
                </div>
            </section>
        </div>
    );
}

export default Article;

//Info tailles, couleurs https://material-ui.com/fr/components/icons/
/*
<ThumbUpAltRounded id="Like-btn"
style={{ fontSize: 40 }}
color="primary"
/>
*/

