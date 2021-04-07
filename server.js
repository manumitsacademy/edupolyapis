var express = require('express')
var app = express();
var cors = require("cors");
var studentroutes = require('./studentroutes');
var emproutes = require("./employeeroutes")

app.use((req,res,next)=>{
    console.log("Middleware executed");
    console.log(req.headers)
    next();
})
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use("/students",studentroutes)
app.use("/employees",emproutes)


app.listen(9091,()=>{console.log("server running on 9091")});