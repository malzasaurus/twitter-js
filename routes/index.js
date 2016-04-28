var express = require('express');
var router = express.Router();
var path = require('path');

// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  console.log("Tweets here!");
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

module.exports = router;