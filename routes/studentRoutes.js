const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

router.get("/", studentController.index);
router.get("/add", studentController.addForm);
router.post("/add", studentController.store);
router.get("/edit/:id", studentController.editForm);
router.post("/edit/:id", studentController.update);
router.get("/delete/:id", studentController.delete);
router.get("/search", studentController.search);

module.exports = router;
