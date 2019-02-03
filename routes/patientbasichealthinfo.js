const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/jwt');
const database = require('../databaseHandle/connectDatabase');


router.post("/addPatientbasichealthinfo", function (req, res) {

    const patientbasichealthinfoData = [
        req.body.patientId,
        req.body.currentDate,
        req.body.cholestorol,
        req.body.socialDisease,
        req.body.allergy,
        req.body. bloodPresure,
        req.body.bloodSugar,
        
       
    ]
    database.addPatientbasichealthinfo(patientbasichealthinfoData, function (err, result) {
        if (err) {
            console.log(err);
            if(err.sqlState =="23000"){
                res.json({success : false , msg : "already registerd"});
                return;
            }
            res.json({ success: false, msg: "something wrong please try again" });
        }
        else {
            res.json({ success: true, msg: "Patient Basic Health Info added" });
        }
    });
})


    

module.exports = router;