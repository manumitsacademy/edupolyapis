var express = require('express');
var router = express.Router();
var course = require('./coursemodel');

router.get("/",(req,res)=>{
    course.find().then((data)=>{
        res.json(data)
    })
})

router.post("/",(req,res)=>{
    // course.findByName('Nodejs').then((details)=>{
    //     console.log("details::",details)
    // })
    var newcourse = new course(req.body);
    newcourse.save((err,data)=>{
        console.log(err)
        res.json(data)
    })    
})
module.exports = router;