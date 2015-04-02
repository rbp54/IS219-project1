var express = require('express');
var router = express.Router();
var util = require("util"); 
var fs = require("fs"); 

/* GET College page. */
router.get('/', function(req, res, next) {
  res.render('upload');
});

module.exports = router;
