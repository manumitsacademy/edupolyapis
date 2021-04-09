var express = require('express');
var router = express.Router();
router.get("/",(req,res)=>{
    res.cookie('favteam','mi')
    res.send("its a cricket game")
})
router.get("/players",(req,res)=>{
    console.log(req.cookies);
    res.send("lets understand cookies")
})
module.exports=router;