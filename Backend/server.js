const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");

// Import controllers
const { loginController, registerController } = require('./controllers/userController');
const { addStudent, editStudent, getStudentbyClass, getAllStudents } = require('./controllers/studentController');

// MongoDB connection URI
async function main() {
    try {
      await mongoose.connect('mongodb://127.0.0.1:27017/edudata');
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }
  
  main();

// Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// User Routes
app.post('/api/v1/users/login', loginController);
app.post('/api/v1/users/register', registerController);

// Fellow Routes (if any, assuming it's empty for now)
// app.post('/api/v1/fellow/some-route', someFellowController);

// Student Routes
app.post('/api/v1/student/add-student', addStudent);
app.post('/api/v1/student/edit-student', editStudent);
app.post('/api/v1/student/get-studentbyclass', getStudentbyClass);
app.post('/api/v1/student/get-allStudents', getAllStudents);

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Connect to MongoDB on server start
 
