const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config/jwt");
const database = require("../databaseHandle/connectDatabase");

router.get("/a"),
  function(req, res) {
    console.log("abc");
  };

router.post("/addcategory", function(req, res) {
  const Category = [req.body.category_Name];
  // const category_Name = req.body.category_Name;
  console.log(req.body.category_Name, "bhbjbjbj");
  const Id = req.body.Id;
  database.selectCategory(req.body.category_Name, function(err, category) {
    if (err) {
      console.log(err);
    } else {
      console.log(category);
      if (category.length === 0) {
        database.addCategory(Category, function(err, cat) {
          if (err) {
            console.log(err);
          } else {
            console.log(cat);
            res.send({ msg: "fdd" });
          }
        });
      }
    }
  });
});

module.exports = router;
