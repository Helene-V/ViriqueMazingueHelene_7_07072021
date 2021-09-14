/*const db = require('../config/db');

class Article {
    constructor(title, description, image) {
        this.title = title;
        this.body = body;
        this.image = image;
    }

    save()
}

module.exports = Article;*/

/*
class Article {
    constructor(title, body, likeOrDislike, image) {
        this.title = title;
        this.body = body;
        this.likeOrDislike = likeOrDislike;
        this.image = image;
    }

    save() {
        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth() + 1;
        let dd = d.getDate();
    
        let createdAtDate = `${yyyy}-${mm}-${dd}`;

        let sql = `
        INSERT INTO articles(
            title,
            body,
            created_at
        )
        VALUES(
            '${this.title}',
            '${this.body}',
            '${createdAtDate}'
            '${this.likeOrDislike}'
            '${this.image}'
        )
        `;

        return db.execute(sql);  
    }

    static findAll() {
        let sql = "SELECT * FROM articles;";
        return db.execute(sql);
    }

    static findById(id) {
        let sql = `SELECT * FROM articles WHERE id = ${id};`;
        return db.execute(sql);
    }
}
*/