const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/jwt');
const database = require('../databaseHandle/connectDatabase');

router.post("/addCurrentState",function(req,res){

    console.log("addcurrentstate route called");
    
    const currentStateData = [
        req.body.rescriptionId,
        req.body.duration ,
        req.body.currentStateDate,
        req.body.state,
        req.body.comment,

    ]

    database.addCurrentState(currentStateData,function(err,result){
        if(err){
            console.log (err);
            res.json({success : false , msg : "something wrong please try again"});
        }
        else{
            res.json({success : true , msg : "Current State Added"});
        }
    });
})

module.exports = router;