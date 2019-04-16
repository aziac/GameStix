var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/customers', function(req, res, next) {
	console.log('SNOMAS');
	res.status(200).json({
		message: 'El pastel de Chucho es lo máximo'
	});

  //res.render('index', { title: 'Express' });
	// No entinedo porque render a un template si el frontend lo tienes en IONIC
});

module.exports = router;
