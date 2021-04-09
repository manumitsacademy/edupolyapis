var express = require('express')
var app = express();
var cors = require("cors");
var cookieParser = require('cookie-parser');
var session = require('express-session');
var studentroutes = require('./studentroutes');
var emproutes = require("./employeeroutes");
var quizrouter = require("./quizrouter");
var cricketrouter = require('./cricketrouter');
var employees = require("./employeesmock")
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(session({secret: "5star"}));
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
        req.session.user = {username:req.body.username,pwd:req.body.pwd}
        res.redirect("/employees/empdetails")
    }
})

var checkAuthentication = (req,res,next)=>{   
    if(req.session.user){
        next();
    }
    else{
        res.redirect("/login");
    }
}
var checkAuthorisation = (req,res,next)=>{
    console.log("Authorisation middleware executed");
    next()
}
app.use("/students",checkAuthentication,checkAuthorisation, studentroutes)
app.use("/employees",checkAuthentication,checkAuthorisation,emproutes)
app.use("/quiz",checkAuthentication,checkAuthorisation,quizrouter)
app.use("/cricket",cricketrouter)

app.listen(9091,()=>{console.log("server running on 9091")});