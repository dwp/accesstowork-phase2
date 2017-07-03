var express     = require('express'),
    router      = express.Router();

router.all('*',function(req,res,next)
{
  req.data.TEMPLATE_FOLDER = 'staff/payments-staff'
  next();
});

module.exports = router;

