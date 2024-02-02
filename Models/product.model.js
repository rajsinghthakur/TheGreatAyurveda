import pool from "../DB/dbConfig.js";

class Product {
    constructor(id, title, brand, price, description, imageUrl, categoryId) {
        this.id = id;
        this.title = title;
        this.brand = brand;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
        this.categoryId = categoryId;
    }

    addProduct() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                } else {
                    let sql = "insert into product(title, brand, price, description, imageUrl, categoryId) values(?,?,?,?,?,?)";
                    con.query(sql, [this.title, this.brand, this.price, this.description, this.imageUrl, this.categoryId], (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();
                    });
                }
            });
        });
    }

    static removeProduct(id) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                } else {
                    let sql = "delete from product where id = ?";
                    con.query(sql, [id], (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();
                    });
                }
            });
        });
    }

    updateProduct() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                } else {
                    let sql = "update product set title = ?, brand = ?, price = ?, description = ?, imageUrl = ?, categoryId = ? where id = ?";
                    con.query(sql, [this.title, this.brand, this.price, this.description, this.imageUrl, this.categoryId, this.id], (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();
                    });
                }
            });
        });
    }

    static viewAllProduct() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                } else {
                    let sql = "select * from product";
                    con.query(sql, (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();
                    });
                }
            });
        });
    }

    static viewParticularProducts(title) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                } else {
                    let sql = "select * from product where title = ?";
                    con.query(sql, [title], (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();
                    });
                }
            });
        });
    }
}

export default Product;