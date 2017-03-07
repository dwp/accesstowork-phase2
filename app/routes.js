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
          if (req.body.self === 'travel1') {
          res.redirect('/payments-v1/self-single-travel')
        } else {
          res.redirect('/payments-v1/self-multi-travel')
        }
      }); 



/// PAYMENTS JOURNEY END ///

/// DESKTOP LOGIN ///

// router.get('/Payments_login_desktop_v1/claim_overview', function (req, res) {

//   // var jugglingFeat = req.query.jugglingFeat

//   req.session.claimtype = req.query.claimtype

//   res.render('Payments_login_desktop_v1/claim_overview', {"data":req.session})
// })


/// LOG IN ROUTES ///

/// claim type pull data through ///


router.post('/Payments_login_desktop_v1/claim_type', function (req, res) {
          
          req.session.claimtype = req.body.claimtype
          
          if (req.body.claimtype === 'Travel') {
            res.redirect('/Payments_login_desktop_v1/travel_type')
          } else if (req.body.claimtype ==='Support') {
            res.redirect('/Payments_login_desktop_v1/support_details')
          } else {
            res.redirect('/Payments_login_desktop_v1/one_off_claim')
          }
        });


/// PULL DATA TO CLAIM OVERVIEW PAGE ///

router.get("/Payments_login_desktop_v1/claim_overview", function (req, res){
  res.render('/Payments_login_desktop_v1/claim_overview', {"data":req.session})
})

/// claim date pull data through >> redirect the page ///


router.post('/Payments_login_desktop_v1/single_travel', function (req, res) {
          
          req.session.dateday = req.body.dateday
          res.redirect('/Payments_login_desktop_v1/select_payee')
          
        });






/// travel type ///
router.post('/Payments_login_desktop_v1/travel_type', function (req, res) {
        if (req.body.claim === 'travel1') {
          res.redirect('/Payments_login_desktop_v1/single_travel')
        } else {
          res.redirect('/Payments_login_desktop_v1/multi_travel')
        }
      });



/// EMPLOYED ROUTES MOBILE ///
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

/// SELF EMPLOYED ROUTES MOBILE ///
router.post('/payments_login_mobile_v1/self_claim_type', function (req, res) {
          if (req.body.claimtype === 'Travel') {
            res.redirect('/payments_login_mobile_v1/travel_type')
          } else if (req.body.claimtype ==='Support') {
            res.redirect('/payments_login_mobile_v1/support_details')
          } else {
            res.redirect('/payments_login_mobile_v1/self_oneoff')
          }
        });

/// DESKTOP LOGIN END ///

/// DESKTOP pull data ///



module.exports = router
