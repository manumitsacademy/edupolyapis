var express = require('express');
var router = express.Router();
var course = require('./coursemodel');

router.get("/",(req,res)=>{

})

router.post("/",(req,res)=>{
    var newcourse = new course(req.body);
    newcourse.save((err,data)=>{
        res.json(data)
    })    
})
module.exports = router;