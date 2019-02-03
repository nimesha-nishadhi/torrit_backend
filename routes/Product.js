
const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config/jwt");
const database = require("../databaseHandle/connectDatabase");

router.post("/", function (req, res) {
    const Product = [
        req.body.productName,
        req.body.quantity,
        req.body.description,
        req.body.cost,
        req.body.reorderLevel,
        req.body.imageURL

    ];

    console.log(Product, "add product API");

    database.selectProduct(req.body.productName, function (err, product) {
        if (err) {
            console.log(err);
        } else {
            console.log(product);
            if (product.length != 0) {
                console.log("product already exists");
            }else{
                database.addProduct(Product, function (err, product) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(product);
                        res.send({ msg: "product added successfully" });
                    }
                });
            }
        }
    });
});

module.exports = router;
