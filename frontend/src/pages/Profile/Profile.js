/*import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {

    const [yourArticles, setYourArticles] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/article/user", {email: localStorage.getItem("email")})
        .then((response) => {
            setYourArticles(response.data);
        });
    });

    return (
        <div className="Profile">
            <h1>{localStorage.getItem("email")}</h1>
        </div>
    )
}

export default Profile;
*/