const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root@123",   // <-- if you set password, put it here
    database: "student_db"
});

db.connect((err) => {
    if (err) throw err;
    console.log("MySQL Connected...");
});

module.exports = db;
