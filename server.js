var express = require('express')
var app = express();
var cors = require("cors");
var studentroutes = require('./studentroutes');
var emproutes = require("./employeeroutes");
var quizrouter = require("./quizrouter");

app.use((req,res,next)=>{
    
    next();
})
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use("/students",studentroutes)
app.use("/employees",emproutes)
app.use("/quiz",quizrouter)


app.listen(9091,()=>{console.log("server running on 9091")});