const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/jwt');
const database = require('../databaseHandle/connectDatabase');

router.post("/addRole",function(req,res){

    console.log("addrole route called");
    
    const roleData = [
        req.body.roleId,
        req.body.roleName
    ]

    database.addRole(roleData,function(err,result){
        if(err){
            console.log (err);
            res.json({success : false , msg : "something wrong please try again"});
        }
        else{
            res.json({success : true , msg : "Role added"});
        }
    });
})

module.exports = router;