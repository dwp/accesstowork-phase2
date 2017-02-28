var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})


/// PAYMENTS VERSION-1 ///

/// EMPLOYED ROUTES ///
router.post('/payments-v1/employment-type', function (req, res) {
        if (req.body.claimtype === 'employed') {
          res.redirect('/payments-v1/user-details')
        } else {
          res.redirect('/payments-v1/self-user-details')
        }
      });

router.post('/payments-v1/claim-type', function (req, res) {
          if (req.body.claimtype === 'Travel') {
            res.redirect('/payments-v1/travel-type')
          } else if (req.body.claimtype ==='Support') {
            res.redirect('/payments-v1/support-single')
          } else {
            res.redirect('/payments-v1/one-off-claim')
          }
        });

router.post('/payments-v1/travel-type', function (req, res) {
        if (req.body.claim === 'travel1') {
          res.redirect('/payments-v1/single-travel')
        } else {
          res.redirect('/payments-v1/multi-travel')
        }
      });

/// SELF EMPLOYED ROUTES ///
router.post('/payments-v1/self-claim-type', function (req, res) {
          if (req.body.claimtype === 'Travel') {
            res.redirect('/payments-v1/self-travel-type')
          } else if (req.body.claimtype ==='Support') {
            res.redirect('/payments-v1/self-support-single')
          } else {
            res.redirect('/payments-v1/self-one-off-claim')
          }
        });

router.post('/payments-v1/self-travel-type', function (req, res) {
        if (req.body.travel === 'travel1') {
          res.redirect('/payments-v1/self-single-travel')
        } else {
          res.redirect('/payments-v1/self-multi-travel')
        }
      });

/// PAYMENTS JOURNEY END ///

/// DESKTOP LOGIN ///

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

/// DESKTOP LOGIN END ///



module.exports = router
