var express = require('express');
var router = express.Router();
const cardsController = require('../controllers/cardsController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cards', cardsController.getCards, function(req, res, next) {
  
  res.status(200).send(res.locals.set)
});

module.exports = router;
