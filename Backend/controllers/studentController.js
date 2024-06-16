const Student =  require( '../models/Student'); // Ensure this path is correct

const addStudent = async (req, res) => {
    try {
        console.log('Student');
        console.log(req.body);
        const user = new Student(req.body);
        console.log(user);
        await user.save();
        console.log(user);
        res.status(200).json({
            success: true,
            user,
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

        if (!fellowid) {
            return res.status(400).json({
                success: false,
                message: 'Fellow ID is required to get students',
            });
        }

        const students = await Student.find({ fellowid });

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

const editStudent = async (req, res) => {
    try {
        const { name, standard, attendance, monthly_score, quarter_scorenum, quarter_scorelit } = req.body;

        if (!name || !standard) {
            return res.status(400).json({
                success: false,
                message: 'Name and standard are required to update the student',
            });
        }

        const incrementFields = {};
        if (attendance !== undefined) incrementFields.attendance = attendance + 1;
        if (monthly_score !== undefined) incrementFields.monthly_score = monthly_score;
        if (quarter_scorenum !== undefined) incrementFields.quarter_scorenum = quarter_scorenum;
        if (quarter_scorelit !== undefined) incrementFields.quarter_scorelit = quarter_scorelit;

        const updatedStudent = await Student.findOneAndUpdate(
            { name, standard },
            { $inc: incrementFields },
            { new: true, upsert: false }
        );

        if (!updatedStudent) {
            return res.status(404).send('Student not found');
        }

        res.status(200).send('Edit successful');
    } catch (error) {
        console.error('Error during editing student:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred during editing the student',
            error: error.message || 'Unknown error',
        });
    }
};
module.exports ={ addStudent, editStudent, getStudentbyClass, getAllStudents };
