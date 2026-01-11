const Student = require("../models/studentModel");

// Show all students
exports.index = (req, res) => {
    Student.getAllStudents((err, results) => {
        if (err) throw err;
        res.render("index", { students: results });
    });
};

// Show add form
exports.addForm = (req, res) => {
    res.render("add");
};

// Save student
exports.store = (req, res) => {
    const { name, email, course } = req.body;

    if (!name || !email || !course) {
        return res.send("All fields are required!");
    }

    Student.createStudent({ name, email, course }, (err) => {
        if (err) throw err;
        res.redirect("/");
    });
};

// Show edit form
exports.editForm = (req, res) => {
    Student.getStudentById(req.params.id, (err, result) => {
        if (err) throw err;
        res.render("edit", { student: result[0] });
    });
};

// Update student
exports.update = (req, res) => {
    const { name, email, course } = req.body;

    Student.updateStudent(req.params.id, { name, email, course }, (err) => {
        if (err) throw err;
        res.redirect("/");
    });
};

// Delete student
exports.delete = (req, res) => {
    Student.deleteStudent(req.params.id, (err) => {
        if (err) throw err;
        res.redirect("/");
    });
};

// Search
exports.search = (req, res) => {
    const keyword = req.query.keyword || "";

    Student.searchStudents(keyword, (err, results) => {
        if (err) throw err;
        res.render("index", { students: results });
    });
};
