const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/jwt');
const database = require('../databaseHandle/connectDatabase');

router.post("/addMedicine",function(req,res){

    console.log("addmedicine route called");
    
    const medicineData = [
        req.body.medicineName,
        req.body.medicineNo,
    ]

    database.addMedicine(medicineData,function(err,result){
        if(err){
            console.log (err);
            res.json({success : false , msg : "something wrong please try again"});
        }
        else{
            res.json({success : true , msg : "Medicine added"});
        }
    });
})

module.exports = router;