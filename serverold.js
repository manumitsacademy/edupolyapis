var express = require('express')
var multer  = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname+'/uploads')
    },
    filename: function (req, file, cb) {
        console.log(file)
      cb(null, file.originalname + '-' + Date.now())
    }
})
var upload = multer({ storage: storage })
var app = express();
app.use(express.static(__dirname+"/public"))
var cors = require("cors");
var cookieParser = require('cookie-parser');
var session = require('express-session');
var studentroutes = require('./studentroutes');
var emproutes = require("./employeeroutes");
var tutorialroutes = require("./tutorialroutes");
var quizrouter = require("./quizrouterlocal");
var cricketrouter = require('./cricketrouter');
var Courserouter = require('./Courserouter');
var employees = require("./employeesmock")

app.use(cors())
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
// app.use(session({secret: "5star"}));
// app.get("/login",(req,res)=>{
//     res.sendFile(__dirname+"/Login.html")
// })

// app.post("/login",(req,res)=>{
//     var x = employees.find((e)=>{
//         if(e.username===req.body.username && e.pwd===req.body.pwd){
//             return true
//         }
//     })
//     if(x){
//         req.session.user = {username:req.body.username,pwd:req.body.pwd}
//         res.redirect("/employees/empdetails")
//     }
// })

// var checkAuthentication = (req,res,next)=>{   
//     if(req.session.user){
//         next();
//     }
//     else{
//         res.redirect("/login");
//     }
// }
// var checkAuthorisation = (req,res,next)=>{
//     console.log("Authorisation middleware executed");
//     next()
// }
app.use("/tutorial",tutorialroutes)
// app.use("/students",checkAuthentication,checkAuthorisation, studentroutes)
// app.use("/employees",checkAuthentication,checkAuthorisation,emproutes)
// app.use("/quiz",checkAuthentication,checkAuthorisation,quizrouter)
// app.use("/cricket",cricketrouter)
// app.use("/course",Courserouter)
// app.post("/takemypic", upload.single('mypic'),(req,res)=>{
//     console.log(req.files);
//     res.send("Wait wait");
// })
app.listen(4000,()=>{console.log("server running on 4000")});