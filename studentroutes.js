var express = require('express');
var router = express.Router();
var students = require('./studentsmock');
router.get("/",(req,res)=>{
    res.json(students);
})

router.post("/",(req,res)=>{
    console.log("received post request",req.body);
    students.push(req.body)
    res.json({'message':'ok'})
})

module.exports = router;