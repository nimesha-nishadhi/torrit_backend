const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/jwt');
const database = require('../databaseHandle/connectDatabase');

router.post("/addMlt",function(req,res){
    
    const mltData = [
        req.body.NIC,
        req.body.mltRegNo
    ]

    database.addMlt(mltData,function(err,result){
        if(err){
            console.log (err);
            if(err.sqlState =="23000"){
                res.json({success : false , msg : "already registerd"});
                return;
            }
            res.json({success : false , msg : "something wrong please try again"});
        }
        else{
            res.json({success : true , msg : "Mlt added"});
        }
    });
})

module.exports = router;

