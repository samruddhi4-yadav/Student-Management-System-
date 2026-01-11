const db = require("../config/db");

exports.getAllStudents = (callback) => {
    db.query("SELECT * FROM students ORDER BY id DESC", callback);
};

exports.createStudent = (data, callback) => {
    db.query("INSERT INTO students SET ?", data, callback);
};

exports.getStudentById = (id, callback) => {
    db.query("SELECT * FROM students WHERE id = ?", [id], callback);
};

exports.updateStudent = (id, data, callback) => {
    db.query("UPDATE students SET ? WHERE id = ?", [data, id], callback);
};

exports.deleteStudent = (id, callback) => {
    db.query("DELETE FROM students WHERE id = ?", [id], callback);
};

exports.searchStudents = (keyword, callback) => {
    db.query(
        "SELECT * FROM students WHERE name LIKE ? OR course LIKE ?",
        [`%${keyword}%`, `%${keyword}%`],
        callback
    );
};
