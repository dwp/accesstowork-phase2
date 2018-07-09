var express = require('express')
var router = express.Router()

// allocate routes //
router.all('/allocate/*',function(req,res,next)
{
  // res.send('rich');
  res.locals.PATH = 'allocate'
  next();
});

// allocate-v2 routes //
router.all('/allocate-v2/*',function(req,res,next)
{
  // res.send('rich');
  res.locals.PATH = 'allocate-v2'
  next();
});

// Unallocated routes pull request //
router.all('/allocate-pull-request/*',function(req,res,next)
{
  // res.send('rich');
  res.locals.PATH = 'allocate-pull-request'
  next();
});


// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

router.get('*/search-results', function (req, res, next) {
  res.locals.search_term = req.query.search_term
  // res.send('fish')
  next();
})


/// STAFF PAYMENTS UI ///

router.use("/staff/payments-staff/payments-home", function (req, res, next){
  // res.send('test');
  res.locals.page="payments-home"
  next()
    });

router.use("/staff/payments-staff/my-cases", function (req, res, next){
  // res.send('test');
  res.locals.page="my-cases"
  next()
    });

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

/// PAYMENTS JOURNEY VERSION 2 ///

/// EMPLOYED ROUTES ///

router.post('/payments-v2/employment-type', function (req, res) {
        if (req.body.claimtype === 'employed') {
          res.redirect('/payments-v2/receipt-verify')
        } else {
          res.redirect('/payments-v2/self-receipt-verify')
        }
      });

router.post('/payments-v2/claim-type', function (req, res) {
            if (req.body.claimtype === 'Travel') {
            res.redirect('/payments-v2/travel-type')
          } else if (req.body.claimtype ==='Support') {
            res.redirect('/payments-v2/support-single')
          } else {
            res.redirect('/payments-v2/one-off-claim')
          }
        });

router.post('/payments-v2/travel-type', function (req, res) {
          if (req.body.claim === 'travel1') {
          res.redirect('/payments-v2/single-travel')
        } else {
          res.redirect('/payments-v2/multi-travel')
        }
      });

/// SELF EMPLOYED ROUTES ///
router.post('/payments-v2/self-claim-type', function (req, res) {
            if (req.body.claimtype === 'Travel') {
            res.redirect('/payments-v2/self-travel-type')
          } else if (req.body.claimtype ==='Support') {
            res.redirect('/payments-v2/self-support-single')
          } else {
            res.redirect('/payments-v2/self-one-off-claim')
          }
        });

router.post('/payments-v2/self-travel-type', function (req, res) {
          if (req.body.claim === 'travel1') {
          res.redirect('/payments-v2/self-single-travel')
        } else {
          res.redirect('/payments-v2/self-multi-travel')
        }
      });



/// HOW TO UPLOAD RECEIPTS ///

// router.post('/payments-v2/how-to-send-receipts', function (req, res) {
//         if (req.body.howtoupload === 'take-photo') {
//           res.redirect('/payments-v2/upload-receipts')
//         } else {
//           res.redirect('/payments-v2/claim-overview')
//         }
//       });


/// PAYMENTS JOURNEY V2 END ///






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
  // res.send('test');
  res.render('payments_login_desktop_v1/claim_overview', {"data":req.session})
    });


/// claim date pull data through >> redirect the page ///

router.post('/Payments_login_desktop_v1/single_travel', function (req, res) {

          req.session.dateday = req.body.dateday
          req.session.month = req.body.month
          req.session.year = req.body.year
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

/// ALLOCATE V1 ROUTES ///

router.post('/allocate/confirm-copy-application', function (req, res) {
        if (req.body.appcopy === 'Yes') {
          res.redirect('/allocate/your_cases_confirmation')
        } else {
          res.redirect('/allocate/application')
        }
      });

/// ALLOCATE V1 ROUTES END ///

/// DESKTOP pull data ///



module.exports = router
