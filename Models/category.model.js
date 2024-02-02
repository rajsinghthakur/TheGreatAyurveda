import pool from "../DB/dbConfig.js";

class Category {
    constructor(id, categoryName) {
        this.id = id;
        this.categoryName = categoryName;
    }

    addCategory() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                } else {
                    let sql = "insert into category(categoryName) values(?)";
                    con.query(sql, [this.categoryName], (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();
                    });
                }
            });
        });
    }

    searchCategory() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                } else {
                    let sql = "select * from category where categoryName = ?";
                    con.query(sql, [this.categoryName], (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();
                    });
                }
            });
        });
    }
}

export default Category;