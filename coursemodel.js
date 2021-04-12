const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/quiz', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

var CourseSchema = new mongoose.Schema({
    coursename:String,
    courseId:Number,
    courseDuration:Number,
    courseDurationType:String
})

var course = mongoose.model('Course',CourseSchema)
module.exports = course;