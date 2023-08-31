const express = require("express");
const { createStudent, getStudents, updateStudent, getSingleStudent } = require("../Controller/studentController");
const router = express.Router();

router.route("/").post(createStudent);

router.route("/student/:id").get(getSingleStudent);

router.route("/students").get(getStudents);

router.route("/students/:id").put(updateStudent);

module.exports = router;