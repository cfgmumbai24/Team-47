// studentfetch.js

const express = require('express');
const router = express.Router();
const { addStudent, editStudent, getStudentbyClass, getAllStudents } = require('../controllers/studentController');

router.post('/add-student', addStudent);
router.post('/edit-student', editStudent);
router.post('/get-studentbyclass', getStudentbyClass);
router.post('/get-allStudents', getAllStudents);

module.exports = router;
