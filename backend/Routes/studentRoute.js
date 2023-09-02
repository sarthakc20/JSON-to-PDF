const express = require("express");
const {
  createStudent,
  getStudents,
  updateStudent,
  getSingleStudent,
  uploadPdf,
  sendMail,
} = require("../Controller/studentController");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const upload = multer({ dest: path.join(__dirname, "../public/uploads") });

router.route("/").post(createStudent);

router.route("/student/:id").get(getSingleStudent);

router.route("/students").get(getStudents);

router.route("/students/:id").put(updateStudent);

router.route("/merge").post(upload.array("pdfs", 2), uploadPdf);

router.route("/sendmail").post(sendMail);

module.exports = router;
