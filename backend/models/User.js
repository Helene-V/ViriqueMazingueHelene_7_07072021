/*const db = require('../config/db');

class userId {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    save() {

        let sql = `
        INSERT INTO users(
            email,
            password,
        )
        VALUES(
            '${this.email}',
            '${this.password}',
        )
        `;

        return db.execute(sql);  
    }

    static findAll() {
        let sql = "SELECT * FROM users;";
        return db.execute(sql);
    }

    static findById(id) {
        let sql = `SELECT * FROM users WHERE id = ${id};`;
        return db.execute(sql);
    }
}

module.exports = userId;*/