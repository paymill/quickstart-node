var express = require('express');
var router = express.Router();
var paymill = require("paymill-wrapper");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PAYMILL - Quick Start' });
});

router.post('/payment', function (req, res) {
  var token = req.body.token;
  var amount = req.body.amount;
  var currency = req.body.currency;
  var description = req.body.description;

  pm = paymill.getContext("<PAYMILL_PRIVATE_KEY>");

  pm.transactions.createWithToken(token, amount, currency, description).then(function(transaction) {
  	res.render('content', { title: 'PAYMILL - Thank You!' });
  }, function(error) {
    res.send('Something went wrong. The transaction could not be created');
  });
});

module.exports = router;
