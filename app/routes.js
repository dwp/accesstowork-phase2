var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

/// DESKTOP ROUTES ///


/// EMPLOYED ROUTES ///
router.post('/Payments_login_desktop_v1/employment_type', function (req, res) {
        if (req.body.claimtype === 'employed') {
          res.redirect('/Payments_login_desktop_v1/aboutyou_employed')
        } else {
          res.redirect('/Payments_login_desktop_v1/aboutyou_selfemployed')
        }
      });

router.post('/Payments_login_desktop_v1/claim_type', function (req, res) {
          if (req.body.claimtype === 'Travel') {
            res.redirect('/Payments_login_desktop_v1/travel_type')
          } else if (req.body.claimtype ==='Support') {
            res.redirect('/Payments_login_desktop_v1/support_details')
          } else {
            res.redirect('/Payments_login_desktop_v1/one_off_claim')
          }
        });

router.post('/Payments_login_desktop_v1/travel_type', function (req, res) {
        if (req.body.claim === 'travel1') {
          res.redirect('/Payments_login_desktop_v1/single_travel')
        } else {
          res.redirect('/Payments_login_desktop_v1/multi_travel')
        }
      });

/// SELF EMPLOYED ROUTES ///
router.post('/Payments_login_desktop_v1/self_claim_type', function (req, res) {
          if (req.body.claimtype === 'Travel') {
            res.redirect('/Payments_login_desktop_v1/travel_type')
          } else if (req.body.claimtype ==='Support') {
            res.redirect('/Payments_login_desktop_v1/support_details')
          } else {
            res.redirect('/Payments_login_desktop_v1/self_oneoff')
          }
        });



/// MOBILE ROUTES ///

/// EMPLOYED ROUTES ///
router.post('/Payments_login_mobile_v1/employment_type', function (req, res) {
        if (req.body.claimtype === 'employed') {
          res.redirect('/Payments_login_mobile_v1/aboutyou_employed')
        } else {
          res.redirect('/Payments_login_mobile_v1/aboutyou_selfemployed')
        }
      });

router.post('/Payments_login_mobile_v1/claim_type', function (req, res) {
          if (req.body.claimtype === 'Travel') {
            res.redirect('/Payments_login_mobile_v1/travel_type')
          } else if (req.body.claimtype ==='Support') {
            res.redirect('/Payments_login_mobile_v1/support_details')
          } else {
            res.redirect('/Payments_login_mobile_v1/one_off_claim')
          }
        });

router.post('/Payments_login_mobile_v1/travel_type', function (req, res) {
        if (req.body.claim === 'travel1') {
          res.redirect('/Payments_login_mobile_v1/single_travel')
        } else {
          res.redirect('/Payments_login_mobile_v1/multi_travel')
        }
      });

/// SELF EMPLOYED ROUTES ///
router.post('/Payments_login_mobile_v1/self_claim_type', function (req, res) {
          if (req.body.claimtype === 'Travel') {
            res.redirect('/Payments_login_mobile_v1/travel_type')
          } else if (req.body.claimtype ==='Support') {
            res.redirect('/Payments_login_mobile_v1/support_details')
          } else {
            res.redirect('/Payments_login_mobile_v1/self_oneoff')
          }
        });




module.exports = router
