var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/customers', function(req, res, next) {
	console.log('SNOMAS');


  res.render('index', { title: 'Express' });
});

module.exports = router;
