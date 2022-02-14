var express = require('express');
var router = express.Router();
var {Subject,Question,Quiz} = require('./quizmodel');
router.post("/addSubject",(req,res)=>{
    console.log(req.body)
    var newSubject = new Subject(req.body);
    newSubject.save((err,data)=>{
        console.log(err)
        res.json(data)
    })    
})
router.post("/addConceptToSubject",(req,res)=>{
    console.log(req.body)
    Subject.findByIdAndUpdate(req.body.id,{ $push: { "concepts": req.body.concept }}, {safe: true, upsert: true, new : true},function(err,data){
        if(err) console.log(err)
        else res.json(data)
        console.log("data",data)
    })
})
router.delete("/deleteSubject",(req,res)=>{
    console.log(req.body)
    Subject.findByIdAndDelete(req.body.id, {safe: true},function(err,data){
        if(err) console.log(err)
        else res.json(data)
        console.log("data",data)
    })
})
router.post("/addQuestion",(req,res)=>{
    console.log(req.body)
    var newQuestion = new Question(req.body);
    newQuestion.save((err,data)=>{
        console.log(err)
        res.json(data)
    })    
})
router.post("/addQuiz",(req,res)=>{
    console.log(req.body)
    var newQuiz = new Quiz(req.body);
    newQuiz.save((err,data)=>{
        console.log(err);
        res.json(data)
    })
})
router.get("/getSubjects",(req,res)=>{
    Subject.find(function(err,docs){
        if(err) console.log("err::",err)
        else console.log("docs::",docs)
        res.json(docs)
    })
})
router.get("/getQuestionsBySubjectConcept/:subject/:concept",(req,res)=>{
    Question.find({subject:req.params.subject,concept:req.params.concept},function(err,docs){
        if(err) res.json({message:"something wrong"})
        else res.json(docs)
    })
})
// router.post("/addTutorial",(req,res)=>{
//     console.log(req.body)
//     var newtutorial = new tutorial(req.body);
//     newtutorial.save((err,data)=>{
//         console.log(err)
//         res.json(data)
//     })    
// })
// router.post("/addConcept",(req,res)=>{
//     console.log(req.body)
//     var newconcept = new concept(req.body);
//     newconcept.save((err,data)=>{
//         console.log(err)
//         res.json(data)
//     })    
// })
// router.post("/addTopic",(req,res)=>{
//     //console.log(req.body)
//     var newtopic = new topic(req.body);
//     newtopic.save((err,data)=>{
//         console.log(err,data)
//         concept.findByIdAndUpdate(req.body.conceptId,{           
//             $push: {"topicSequence":data._id}            
//         }).then((updateResponse)=>{
//             console.log("Updated Responce",updateResponse)
//         })
//         res.json(data)
//     })    
// })
// router.get("/technologiesList",(req,res)=>{
//     technology.find({}).then((data)=>{
//         console.log("Req")
//         res.json(data)
//     })
// })

// router.get("/tutorialListByTechnologyId",(req,res)=>{
//     console.log(req.query)
//     tutorial.find({"technologyId":req.query.technologyId}).then((data)=>{
//         console.log("tutorialListByTechnologyId Req");       
//         res.json(data)
//     })
// })
// router.get("/conceptListByTutorialId",(req,res)=>{
//     console.log(req.query);
//     concept.find({"tutorialId":req.query.tutorialId}).then((data)=>{
//         console.log("tutorialListByTechnologyId Req")
//         res.json(data)
//     })
// })
// router.get("/tutorialByTutorialId/:tutorialId",(req,res)=>{
//     topic.find({"tutorialId":req.params.tutorialId}).then((data)=>{
//         console.log("tutorialByTechnologyId Req")
//         res.json(data)
//     })
// })
// router.get("/topicsByConceptId/:conceptId",(req,res)=>{
//     topic.find({"conceptId":req.params.conceptId}).then((data)=>{
//         console.log("Topics by concept Req")
//         res.json(data)
//     })
// })
// router.get("/topicByTopicId/:topicId",(req,res)=>{
//     console.log("req.params.topicId",req.params.topicId)
//     topic.find({"_id":req.params.topicId}).then((data)=>{
//         console.log("topic Req")
//         res.json(data)
//     })
// })
// router.put("/updateTopicByTopicId",(req,res)=>{
//     console.log("req.body update req",req.body)
//     topic.findOneAndReplace({"_id":req.body._id},req.body).then((data)=>{
//         console.log("topic Req")
//         res.json(data)
//     })
// })
// router.delete("/deleteTopicById/:topicId",(req,res)=>{
//     console.log("delete req.params.topicId",req.params.topicId)
    
//     topic.remove({ _id: req.params.topicId }, function(err,data) {
//         if (!err) {
//             res.json(data) 
//         }
//         else {
//                 res.json({msg:"error vachindi"})
//         }
//     });
// })
module.exports = router;

