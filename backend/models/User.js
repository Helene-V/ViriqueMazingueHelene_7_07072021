const db = require('../config/db');

class userId {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    save() {
       //let d = new Date();
        //let yyyy = d.getFullYear();
        //let mm = d.getMonth() + 1;
        //let dd = d.getDate();
    
        //let createdAtDate = `${yyyy}-${mm}-${dd}`;

        let sql = `
        INSERT INTO users(
            username,
            password,
        )
        VALUES(
            '${this.username}',
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

module.exports = userId;