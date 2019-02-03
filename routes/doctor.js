const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/jwt');
const database = require('../databaseHandle/connectDatabase');

router.post("/addDoctor", function (req, res) {

    const doctorData = [
        req.body.doctorRegNo,
        req.body.doctorField,
        req.body.doctorDesignation,
        req.body.workAddress,
        req.body.NIC,

    ]
    database.addDoctor(doctorData, function (err, result) {
        if (err) {
            console.log(err);
            if(err.sqlState =="23000"){
                res.json({success : false , msg : "already registerd"});
                return;
            }
            res.json({ success: false, msg: "something wrong please try again" });
        }
        else {
            res.json({ success: true, msg: "Doctor added" });
        }
    });
})

router.post('/viewdoctor',function(req,res){
    console.log(req)
    database.doctorDetails(req,function(err,result){

        if(err){
            console.log(err)
        }else{
            res.json(result);
        }
    })
})

module.exports = router;