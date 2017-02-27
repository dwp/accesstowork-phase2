var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('start_page')
})

// add your routes here

/// EMPLOYED ROUTES ///
router.post('/employment_type', function (req, res) {
        if (req.body.claimtype === 'employed') {
          res.redirect('/aboutyou_employed')
        } else {
          res.redirect('/aboutyou_selfemployed')
        }
      });

router.post('/claim_type', function (req, res) {
          if (req.body.claimtype === 'Travel') {
            res.redirect('/travel_type')
          } else if (req.body.claimtype ==='Support') {
            res.redirect('/support_details')
          } else {
            res.redirect('/one_off_claim')
          }
        });

router.post('/travel_type', function (req, res) {
        if (req.body.claim === 'travel1') {
          res.redirect('/single_travel')
        } else {
          res.redirect('/multi_travel')
        }
      });

/// SELF EMPLOYED ROUTES ///
router.post('/self_claim_type', function (req, res) {
          if (req.body.claimtype === 'Travel') {
            res.redirect('/travel_type')
          } else if (req.body.claimtype ==='Support') {
            res.redirect('/support_details')
          } else {
            res.redirect('/self_oneoff')
          }
        });



module.exports = router
