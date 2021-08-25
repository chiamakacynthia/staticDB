const express = require("express");
const mongoose = require("mongoose");
const model = require("./model");
const router = express.Router();

router.get("/", async (req, res) =>{
    const StudentData = await model.find();
  try {
    res.status(200).json({
      message: "student data found",
      data: StudentData,
    });
  } catch (error) {
    res.status(404).json({
      message: "list not found",
      data: StudentData,
    });
  }
});


router.post("/",async (req, res) => {
    const newStudent = await model.create({
      name: req.body.name,
     course: req.body.course,
     
    });
    try {
      res.status(200).json({
        message: "newStudent added",
        data: newStudent,
      });
    } catch (error) {
      res.status(404).json({
        message: "newStudent not added",
        data: newStudent,
      });
    }
  });

  router.get("/:id", async (req, res) => {
    const oneStudent = await model.findById(req.params.id);
    try {
      res.status(200).json({
        message: "Student found",
        data: oneStudent ,
      });
    } catch (error) {
      res.status(404).json({
        message: "Student  not found",
        data:oneStudent ,
      });
    }
  });


module.exports = router;