const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/quiz', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

var CourseSchema = new mongoose.Schema({
    coursename:{type:String},
    courseId:{type:Number,required:false,min:10,max:34},
    courseDuration:Number,
    courseDurationType:String
})
CourseSchema.index({coursename:1},{unique:true,dropDups:true});

var course = mongoose.model('Course',CourseSchema);
CourseSchema.statics.findByName = function(cname){
    return this.find({coursename:cname})
}
module.exports = course;