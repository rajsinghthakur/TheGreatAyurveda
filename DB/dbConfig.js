import mysql from "mysql2";

export default mysql.createPool({
    user: "root",
    password: "Raj@882714",
    database: "thegreatayurveda",
    host: "localhost",
    connectionLimit: 100
});