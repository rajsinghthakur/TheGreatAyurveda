import pool from "../DB/dbConfig.js";

class Admin {
    constructor(id, adminName, password, email) {
        this.id = id;
        this.adminName = adminName;
        this.password = password;
        this.email = email;
    }

    signUp() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                } else {
                    let sql = "insert into admin(adminName, password, email) values(?,?,?)";
                    con.query(sql, [this.adminName, this.password, this.email], (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();
                    });
                }
            });
        });
    }

    signIn() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);

                } else {
                    let sql = "select * from admin where email = ? and password =?";
                    con.query(sql, [this.email, this.password], (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();
                    });
                }
            });
        });
    }
}

export default Admin;