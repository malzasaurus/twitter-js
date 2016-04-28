var express = require('express');
var router = express.Router();
var path = require('path');

// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');


router.get( '/users/:name', function (req, res) {
	console.log("I'm running");
  var userName = req.params.name;
 // var tweets = tweetBank.list();
 console.log(userName);
  var userTweet = tweetBank.find({name: userName});
  console.log(userTweet);
  res.render( 'index', { title: 'Twitter.js', tweets: userTweet} );
});

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  console.log("Tweets here!");
  res.render( 'index', { title: 'Twitter.js', tweets: tweets} );
});

module.exports = router;