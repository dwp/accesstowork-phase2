var express     = require('express'),
    fs          = require("fs"),
    util        = require("util"),
    _           = require("lodash"),
    moment      = require('moment'),
    tog         = require(appRoot + '/lib/tog.js'),
    router      = express.Router();
var express     = require('express'),
    router      = express.Router();
    

router.all('*',function(req,res,next)
{
  req.data.TEMPLATE_FOLDER = 'staff/payments-staff'
  next();
});

module.exports = router;

