var express = require('express');
var router = express.Router();
const cardsController = require('../controllers/cardsController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cards', cardsController.fetchCards, function(req, res, next) {
  console.log(`The current length of the JSON file aka number of cards are ${Object.keys(res.locals.set).length}`)
  res.setHeader('Content-Type', 'application/json')
  res.status(200).send(JSON.stringify(res.locals))
});

module.exports = router;
