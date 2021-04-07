var express = require('express');
var router = express.Router();
var employees = require("./employeesmock");
router.get("/",(req,res)=>{
    res.json(employees)
})
module.exports = router