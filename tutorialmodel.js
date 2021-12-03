const mongoose = require('mongoose');
const uri = "mongodb+srv://praveen:hello123@cluster0.5apjp.mongodb.net/tutorials?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.connect('mongodb://127.0.0.1:27017/tutorials', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
var TechnologySchema = new mongoose.Schema({
    title:{type:String},
    tagline:{type:String},   
})
var TutorialSchema = new mongoose.Schema({
    title:{type:String},
    tagline:{type:String},  
    technologyId:{type:String} 
})
var ConceptSchema = new mongoose.Schema({
    title:{type:String},
    tagline:{type:String},  
    tutorialId:{type:String},
    topicSequence:{type:Array} 
})
var TopicSchema = new mongoose.Schema({
    title:{type:String},
    tagline:{type:String},  
    technologyId:{type:String}, 
    tutorialId:{type:String}, 
    conceptId:{type:String},
    content:{type:Object} 
})

TopicSchema.pre("save",function(next){
    console.log("HI middle ware schema")
    next()
})

var technology = mongoose.model('Technology',TechnologySchema);
var tutorial = mongoose.model('Tutorial',TutorialSchema)
var concept = mongoose.model('concept',ConceptSchema)
var topic = mongoose.model('Topic',TopicSchema)
module.exports = {technology,tutorial,concept,topic};