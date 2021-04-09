var express = require('express')
var app = express();
var cors = require("cors");
var cookieParser = require('cookie-parser')
var studentroutes = require('./studentroutes');
var emproutes = require("./employeeroutes");
var quizrouter = require("./quizrouter");
var cricketrouter = require('./cricketrouter');
var employees = require("./employeesmock")
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.get("/login",(req,res)=>{
    res.sendFile(__dirname+"/Login.html")
})
app.post("/login",(req,res)=>{
    var x = employees.find((e)=>{
        if(e.username===req.body.username && e.pwd===req.body.pwd){
            return true
        }
    })
    if(x){
        res.cookie('username',req.body.username);
        res.cookie('pwd',req.body.pwd);
        res.redirect("/students")
    }
})
app.use((req,res,next)=>{   
    if(req.cookies.username && req.cookies.pwd){
        next();
    }
    else{
        res.redirect("/login");
    }
})

app.use("/students",studentroutes)
app.use("/employees",emproutes)
app.use("/quiz",quizrouter)
app.use("/cricket",cricketrouter)

app.listen(9091,()=>{console.log("server running on 9091")});