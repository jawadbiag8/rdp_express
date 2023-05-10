var express = require('express');
var router = express.Router();
// var lib=require('../public/lib')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// router.get("/my-endpoint", );
module.exports = router;
