var express = require('express');
var router = express.Router();

// Again

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});
router.get('/index', function(req, res, next) {
  res.render('home', { title: 'Home' });
});
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home' });
});
router.get('/FAQs', function(req, res, next) {
  res.render('faqs', { title: 'FAQs' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Us' });
});
router.get('/terms', function(req, res, next) {
  res.render('terms', { title: 'Terms & Conditions' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Us' });
});
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});
module.exports = router;
