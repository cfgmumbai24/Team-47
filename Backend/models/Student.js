const mongoose = require('mongoose');

// MongoDB connection URI
// const uri = 'mongodb://localhost:27017/education'; // Replace 'yourDatabaseName' with the actual name of your database

// // Connect to MongoDB
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('Successfully connected to MongoDB');
//     })
//     .catch(err => {
//         console.error('Error connecting to MongoDB:', err);
//     });

// Define the schema for the 'student' collection
const { Schema } = mongoose;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rollnum:{
        type: Number,
        required: true
    },
    standard: {
        type: Number,
        required: true,
        enum: [1, 2, 3, 4, 5]
    },
    current_division: {
        type: String,
        default: 'A',
        enum: ['A', 'B', 'C', 'D']
    },
    attendance: {
        type: Number,
        default: 0
    },
    monthly_score: {
        type: Number,
        default: 0
    },
    activity_performed :{
        type: String,
        default: 'None',
        enum: ['Social', 'group-diss', 'Active-part', 'Other','None']
    },
    quarter_scorenum: {
        type: Number,
        default: 0
    },
    quarter_scorelit: {
        type: Number,
        default: 0
    },
    fellow: {
        type: Schema.Types.ObjectId,
        ref: 'Fellow', // Ensure 'Fellow' is the correct reference model
    },
    date: {
        type: Date,
        default : Date.now()
    },
});

// Create the model for the 'student' collection
const Student = mongoose.model('Student', studentSchema);

// Export the model to use it in other parts of the application
module.exports = Student;
