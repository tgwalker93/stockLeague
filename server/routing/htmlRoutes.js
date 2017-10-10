var path = require("path");

var db = require("../../models");

var request = require("request");
var express = require("express");
var passport = require("passport");
var router = express.Router();

// ===============================================================================
// ROUTING
// ===============================================================================

  router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../../public/home.html"));
  });
  router.get("/createAccount", function(req, res) {
    res.sendFile(path.join(__dirname, "../../public/createAccount.html"));
  });

  router.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../../public/profile.html"));
  });

  router.get("/team", function(req, res) {
    res.sendFile(path.join(__dirname, "../../public/team.html"));
  });

  router.get("/trade", function(req, res) {
    res.sendFile(path.join(__dirname, "../../public/trade.html"));
  });


  router.get("/stockDetails", function(req, res) {
    res.sendFile(path.join(__dirname, "../../public/stockDetails.html"));
  });

  router.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../../public/login.html"));
  });

  // If no matching route is found default to home
  router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../../public/home.html"));
  });


  module.exports = router;
