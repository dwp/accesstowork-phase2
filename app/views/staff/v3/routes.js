var express     = require('express'),
    fs          = require("fs"),
    util        = require("util"),
    _           = require("lodash"),
    moment      = require('moment'),
    tog         = require(appRoot + '/lib/tog.js'),
    router      = express.Router();

router.all('*',function(req,res,next)
{
  res.locals.PATH = 'staff/v3'
  next();
});

router.get('/', function(req,res,next)
{
  res.redirect('your_cases');
});

router.get('/citizen/support', function(req,res,next)
{
  if (res.locals.data.support == "Yes")
  {
    next();
  } else if  (res.locals.data.support == "No") {
    res.redirect('support/rejected');
  } else {
    res.redirect('support/initial');
  }
});

module.exports = router;
