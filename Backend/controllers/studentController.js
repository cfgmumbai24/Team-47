const Student =  require( '../models/Student'); // Ensure this path is correct

const mongoose = require('mongoose');
const addStudent = async (req, res) => {
    try {
        const { fellow, name, rollnum, standard } = req.body;

        if (!fellow) {
            return res.status(400).json({
                success: false,
                message: 'Invalid fellow ID',
            });
        }

        const student = new Student({
            fellow ,
            name,
            rollnum,
            standard
        });

        await student.save();
        res.status(200).json({
            success: true,
            student,
        });
    } catch (err) {
        console.error('Error during adding student:', err);
        res.status(500).json({
            success: false,
            message: 'An error occurred during adding the student',
            error: err.message || 'Unknown error',
        });
    }
};

const getStudentbyClass = async (req, res) => {
    try {
        const { standard, fellowid } = req.body;

        if (!standard) {
            return res.status(400).json({
                success: false,
                message: 'Standard is required to get students',
            });
        }

        const students = await Student.find({ standard, fellowid });

        if (students.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No students found for the given standard',
            });
        }

        res.status(200).json({
            success: true,
            students,
        });
    } catch (err) {
        console.error('Error during fetching students:', err);
        res.status(500).json({
            success: false,
            message: 'An error occurred during fetching students',
            error: err.message || 'Unknown error',
        });
    }
};

const getAllStudents = async (req, res) => {
    try {
      const { fellowid } = req.body;
      console.log('Fellow ID from request:', fellowid);
      if (!fellowid) {
        return res.status(400).json({
          success: false,
          message: 'Fellow ID is required to get students',
        });
      }
  
      // Correctly querying by 'fellow' field in the database
      const students = await Student.find({ fellow: fellowid });
  
      if (students.length === 0) {
        return res.status(404).json({
          success: false,
          message: 'No students found for the given fellow ID',
        });
      }
  
      res.status(200).json({
        success: true,
        students,
      });
    } catch (err) {
      console.error('Error during fetching students:', err);
      res.status(500).json({
        success: false,
        message: 'An error occurred during fetching students',
        error: err.message || 'Unknown error',
      });
    }
  };

const editStudent = async (req, res) => {   // await transactionModel.findOneAndUpdate({_id:req.body.transactionId},req.body.payload);
    try{ 
        // console.log(req.body);   // how to have communication skills like yours
        const prev = await Student.findOne({_id:req.body.id});
        console.log(prev);
        await Student.findOneAndUpdate({name:req.body.name},req.body.payload);
        const updated = await Student.findOne({_id:req.body.id});
        console.log(updated);
        console.log(updated);
        res.status(200).send('edit-successfull');
    }catch(error){
        console.error('Error during getting all transactions:', err);
        res.status(500).json({
            success: false,
            message: 'An error occurred during getting all transactions',
            error: err.message || 'Unknown error',
        });
    }
};
module.exports ={ addStudent, editStudent, getStudentbyClass, getAllStudents };
