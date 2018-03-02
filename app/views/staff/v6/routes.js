var express     = require('express'),
    fs          = require("fs"),
    util        = require("util"),
    _           = require("lodash"),
    moment      = require('moment'),
    tog         = require(appRoot + '/lib/tog.js'),
    router      = express.Router();

router.all('*',function(req,res,next)
{
  res.locals.PATH = 'staff/v6'
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

router.post('/citizen/case/eligibility', function(req,res,next)
{
  return (req.body.support == 'No') ? 
    res.redirect('/staff/v6/citizen/support/rejected') : 
    res.redirect('/staff/v6/citizen/timeline');
});

router.post('/citizen/support/award-confirm', function(req,res,next) {
  res.render('staff/v6/citizen/support/award-confirm', {data:req.body});
});

router.post('/citizen/support/add-receipt-check-answers',function(req,res,next)
{
  var payment = req.session.data['payment']
  if ( payment == 'accept'){
    res.redirect('/staff/v6/citizen/support/add-receipt-check-answers')
  }
  else {
    res.redirect('/staff/v6/citizen/support/add-receipt-check-answers-reject')
  }

});

module.exports = router;
