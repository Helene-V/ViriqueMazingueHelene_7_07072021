const db = require('../config/db');

class Article {
    constructor(title, body) {
        this.title = title;
        this.body = body;
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

module.exports = Article;