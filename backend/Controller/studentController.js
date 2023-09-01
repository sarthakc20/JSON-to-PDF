const Student = require("../Model/studentModel");
const express = require("express");
const { mergePdfs } = require("../Routes/merge");
const path = require("path");

// Create Student
exports.createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);

    res.status(201).json({
      success: true,
      student,
    });
  } catch (error) {
    res.send({ status: 400, success: false, message: error.message });
  }
};

// Get Student
exports.getSingleStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    res.status(200).json({
      success: true,
      student,
    });
  } catch (error) {
    res.send({ status: 400, success: false, message: error.message });
  }
};

// Get all Students
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json({
      success: true,
      students,
    });
  } catch (error) {
    res.send({ status: 400, success: false, message: error.message });
  }
};

// Update Student
exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindModify: false,
    });

    res.status(200).json({
      success: true,
      student,
    });
  } catch (error) {
    res.send({ status: 400, success: false, message: error.message });
  }
};

// Upload PDF
exports.uploadPdf = async (req, res) => {
  try {
    // console.log(req.files);
    const pdf1Path = path.join(__dirname, '..', 'public', 'uploads', req.files[0].filename);
    const pdf2Path = path.join(__dirname, '..', 'public', 'uploads', req.files[1].filename);

    await mergePdfs(pdf1Path, pdf2Path);
    // res.redirect("http://localhost:3000/static/merged.pdf")
    res.status(200).json({
      success: true,
      data: req.files,
    });
  } catch (error) {
    res.send({ status: 400, success: false, message: error.message });
  }
};
