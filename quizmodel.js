const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const uri = "mongodb+srv://praveen:hello123@cluster0.5apjp.mongodb.net/tutorials?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.connect('mongodb://127.0.0.1:27017/tutorials', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
var SubjectSchema = new mongoose.Schema({
    title:{type:String},
    concepts:{type:Array},   
})
var Subject = mongoose.model('Subject',SubjectSchema);

var QuestionSchema = new mongoose.Schema({    
    question:{type:String},
    concept:{type:Array},
    subject:{type:String},
    level:{type:Number},
    options:{type:Array},
    answer:{type:String}
})

var Question = mongoose.model("Question",QuestionSchema);
var QuizSchema = new mongoose.Schema({
    subject:{type:String},
    concept:{type:String},
    questionIds:{type:Array}
})
var Quiz = new mongoose.model("Quiz",QuizSchema)
module.exports = {Subject,Question,Quiz};