var express = require('express');
var router = express.Router();
var employees = require("./employeesmock");
router.get("/",(req,res)=>{
    res.json(employees)
})
router.get("/empdetails",(req,res)=>{
    employees.find((e)=>{
        if(e.username===req.session.user.username){
            res.json(e)
        }
    })    
})
module.exports = router