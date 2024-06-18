const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rollnum: {
        type: Number,
        required: true
    },      // got a long lst of 
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
    activity_performed: {
        type: String,
        default: 'None',
        enum: ['Social', 'group-diss', 'Active-part', 'Other', 'None']
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
        type: String,
        // ref: 'Fellow', // Ensure 'Fellow' is the correct reference model
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
