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

module.exports = router;
