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
var tutorialroutes = require("./tutorialroutes");
var quizroutes = require("./quizroutes")
app.use(cors())
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/tutorial",tutorialroutes)
app.use("/quiz",quizroutes)
app.listen(4000,()=>{console.log("server running on 4000")});