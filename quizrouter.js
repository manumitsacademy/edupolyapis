var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

router.get("/",(req,res)=>{
    MongoClient.connect("mongodb://localhost:27017", { useUnifiedTopology: true },
    (err,client)=>{
        var db = client.db("quiz");
        db.collection('question').find().toArray().then((data)=>{
            console.log(data)
            res.json(data);
            client.close();
        })        
    })    
})

router.post("/",(req,res)=>{    
    console.log(req.body)
    MongoClient.connect("mongodb://localhost:27017", { useUnifiedTopology: true },
    (err,client)=>{
        var db = client.db("quiz");        
        db.collection("question").insertMany(req.body).then(data=>{res.json(data)})
    })    
})

router.delete("/:id",(req,res)=>{    
    console.log(req.params)
    MongoClient.connect("mongodb://localhost:27017", { useUnifiedTopology: true },
    (err,client)=>{
        var db = client.db("quiz");        
        db.collection("question").deleteOne({_id:ObjectID(req.params.id)})
        .then((resp)=>{
            res.json({message:'deleted'})
        })
        .catch((err)=>{console.log(err)})
    })    
    res.send("Lets see the delete")
})

router.put("/:id",(req,res)=>{    
    console.log(req.params);
    MongoClient.connect("mongodb://localhost:27017", { useUnifiedTopology: true },
    (err,client)=>{
        var db = client.db("quiz");        
        db.collection("question").updateOne({_id:ObjectID(req.params.id)},{ $set: req.body })
        .then((resp)=>{
            res.json({message:'update success'})
        })
        .catch((err)=>{console.log(err)})
    })    
})

module.exports = router;
