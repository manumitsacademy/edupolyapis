var express = require('express');
var router = express.Router();
var students = require('./studentsmock');
var studentModel = require("./studentmodel");
const StudentModel = require('./studentmodel');
const UserModel = require('./usermodel');

router.get("/",(req,res)=>{
    res.json(students);
})

router.post("/",(req,res)=>{
    console.log("received post request",req.body);
    var newstudent = new StudentModel({firstname:'praveen',lastname:'gubbala'});
    var newUser = new UserModel({firstname:'praveen',lastname:'gubbala'});
    newstudent.save((err,data)=>{
        if(err){
            console.log(err)
        }else{
            console.log(data)
        }
    })
    newUser.save((err,data)=>{
        if(err){
            console.log(err)
        }else{
            console.log("User",data)
        }
    })
    res.json({'message':'ok'})
})

module.exports = router;