var express     = require('express'),
    fs          = require("fs"),
    util        = require("util"),
    _           = require("lodash"),
    moment      = require('moment'),
    // db_url      = process.env.MONGOLAB_URI || 'mongodb://localhost/accesstowork',
    // db_url      = 'mongodb://localhost/accesstowork',
    // db          = require('monk')(db_url),
    tog         = require(appRoot + '/lib/tog.js'),
    router      = express.Router();

// var store = db.get('cases');

function loadAdvisers()
{
  var adviser_data = __dirname + "/../mvp/_data/advisers.json";
  return JSON.parse(fs.readFileSync(adviser_data).toString());
}

router.all('*',function(req,res,next)
{
  req.data = req.data || {};
  req.data.TEMPLATE_FOLDER = 'staff/v2'
  req.data.loggedin = req.session.user;
  next();
});

router.get('/login', function(req,res,next)
{
  delete(req.session.user);
  req.data.advisers = loadAdvisers();
  next();
});

router.get('/', function(req,res,next)
{
  res.send('router.get(/) - database - needs fixing!')
  // store.find({"open":true}).then(function(cases)
  // {
  //   req.data.by = "all";
  //   req.data.cases = cases;
  //   next();
  // });
});

router.get('/show/closed/', function(req,res,next)
{
  res.send('router.get(/show/closed/) - database - needs fixing!')
  // store.find({"open":false}).then(function(cases)
  // {
  //
  //   req.data.title = "Closed (in DISC)";
  //   req.data.cases = cases;
  //   req.url = '/';
  //   next();
  // });
});

/*
  ALL CASES GROUPS BY CATEGORY
*/
router.get('/groupby/:by', function(req,res,next)
{
  var by = req.params.by;
  if (by == "all") res.redirect('/'+req.data.TEMPLATE_FOLDER);

  res.send('router.get(/groupby/:by) - database - needs fixing!')
  // store.find({"open":true}).then(function(cases)
  // {
  //   var cases = _.groupBy(cases,'team');
  //   req.data.by = by;
  //   req.data.cases = cases[by];
  //   req.url = '/';
  //   next();
  // });
});

/*
  LIST ALL ADVISERS
*/
router.get('/advisers/:team?', function(req,res,next)
{
  var team = req.params.team
  if (team == "all") res.redirect('/'+req.data.TEMPLATE_FOLDER+'/advisers/');

  if (team) {
    var advisers = _.groupBy(loadAdvisers(),"team")[team]
    req.data.teamname = team+" team";
    req.url = '/advisers'
  } else {
    var advisers = loadAdvisers()
    req.data.teamname = "All Advisers";
  }

  // res.send(tog(advisers[team]))


  req.data.advisers = advisers

  next()
})

/*
  ADVISER CASES PAGE
*/
router.get('/adviser/:id', function(req,res,next)
{
  var id = parseInt(req.params.id);

  res.send('router.get(/adviser/:id) - database - needs fixing!')
  // store.find({"adviser.id":id,"open":true}).then(function(cases)
  // {
  //
  //   req.data.cases = cases;
  //   req.url = '/adviser';
  //   next();
  // });
});

/*
  UPDATE - THIS CASE'S ADVISER
*/
router.post('/customer/adviser/update', function(req,res,next)
{
  var cid = req.body.case_id;
  var aid = parseInt(req.body.adviser_id);

  var advisers = loadAdvisers();

  var newad = _.findWhere(advisers,{"id":aid});

  res.send('router.get(/customer/adviser/update) - database - needs fixing!')
  // store.findOne({"_id":cid}).then(function(the_case)
  // {
  //   the_case.adviser = newad;
  //   store.update({"_id":the_case._id},the_case,function(err,doc)
  //   {
  //     res.status(200);
  //     res.send(JSON.stringify(newad));
  //   });
  // });
});

/*
  UPDATE - THIS CASE'S IN DISC MARKER ("open")
*/
router.post('/customer/disc/update',function(req,res,next)
{
  var cid = req.body.case_id;
  var open = req.body.open;

  res.send('router.get(/customer/disc/update) - database - needs fixing!')
  // store.findOne({"_id":cid}).then(function(the_case)
  // {
  //   the_case.open = open;
  //   store.update({"_id":the_case._id},the_case,function(err,doc)
  //   {
  //     res.status(200);
  //     res.send(JSON.stringify(doc));
  //   });
  // });
});

/*
  UPDATE - ADD AN ITEM TO THE TIMELINE
*/
router.post('/timeline/update',function(req,res,next)
{
  var cid = req.body.case_id;
  var advisers = loadAdvisers();
  var adviser = req.session.user || _.sample(advisers);

  res.send('router.get(/timeline/update) - database - needs fixing!')
  // store.findOne({"_id":cid}).then(function(the_case)
  // {
  //   the_case.timeline = the_case.timeline || [];
  //   the_case.timeline.push({
  //     "status": req.body.status,
  //     "notes": req.body.notes,
  //     "date": moment().toString(),
  //     "adviser": adviser,
  //   });
  //   store.update({"_id":the_case._id},the_case,function(err,doc)
  //   {
  //     res.status(200);
  //     res.send(JSON.stringify(doc));
  //   });
  // });
});

/*
  UPDATE - THIS CASE'S CATEGORY
*/
router.post('/customer/cat/update', function(req,res,next)
{
  var cid = req.body.case_id;
  var cat = req.body.category;

  res.send('router.get(/customer/cat/update) - database - needs fixing!')
  // store.findOne({"_id":cid}).then(function(the_case)
  // {
  //   the_case.allocation = cat;
  //   store.update({"_id":the_case._id},the_case,function(err,doc)
  //   {
  //     res.status(200);
  //     res.send("success");
  //   });
  // });
});

/*
  CUSTOMER DETAILS PAGES.
*/
router.get('/customer/:id/:what?', function(req,res,next)
{
  var id = req.params.id;
  var what = (req.params.what) ? '_'+req.params.what : '_application';

  res.send('router.get(/customer/:id/:what?) - database - needs fixing!')
  // store.findOne({"_id":id}).then(function(cases)
  // {
  //   req.data.advisers = loadAdvisers();
  //   // req.data.case = _.findWhere(cases, {'_id':String(id)});
  //   req.data.case = cases;
  //   req.data.chosen = what.substr(1);
  //
  //   console.log(what.substr(1));
  //
  //   req.url = '/customer'+what+'/';
  //   next();
  // });
});

router.post('/login/update',function(req,res,next)
{
  var aid = parseInt(req.body.adviser);
  var advisers = loadAdvisers();
  var newad = _.findWhere(advisers,{"id":aid});
  req.session.user = newad;
  res.send(newad);
});

router.get('/edit',function(req,res,next)
{
  var out = [];
  var advisers = loadAdvisers();
  res.send('router.get(/edit) - database - needs fixing!')
  // store.find({"open":true}).then(function(cases)
  // {
  //   res.send(tog(cases));
  // })
});

module.exports = router;
