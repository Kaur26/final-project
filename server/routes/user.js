var express = require('express');
var router = express.Router();
var user=require('../models/user');
var passport=require('passport');

//passport
var app = express();
app.use(require('serve-static')(__dirname + '/../../public'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());




  /* login */
  router.post('/login',
  passport.authenticate('local'),
  function(req, res)
  {

    res.send("Successfully Logged In!");
  });

  /* logout */
  router.post('/logout',
  passport.authenticate('local'),
  function(req, res)
  {

    res.send("Successfully Logged out!");
  });





module.exports = router;
