import pool from "../DB/dbConfig.js";

class Feedback {
    constructor(id, ratingStar, reviewText, userId, productId) {
        this.id = id;
        this.ratingStar = ratingStar;
        this.reviewText = reviewText;
        this.userId = userId;
        this.productId = productId;
    }

    productfeedback() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                } else {
                    let sql = "insert into productfeedback(ratingStar, reviewText, userId, productId) values(?, ?, ?, ?)";
                    con.query(sql, [this.ratingStar, this.reviewText, this.userId, this.productId], (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();
                    });
                }
            });
        });
    }
}
export default Feedback;