var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET About Me page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET Contact Me page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

/* GET Project 1 - Car Rental System */
router.get('/projects/crs', function(req, res, next) {
  res.render('fiveprojects/crs', { title: 'Project 1' });
});

/* GET Project 2 - Text Autocompletion System */
router.get('/projects/tas', function(req, res, next) {
  res.render('fiveprojects/tas', { title: 'Project 2' });
});

/* GET Project 3 - Ying Yang Leadership Video Project */
router.get('/projects/yylvp', function(req, res, next) {
  res.render('fiveprojects/yylvp', { title: 'Project 3' });
});

/* GET Project 4 - Video Presentation on Computers */
router.get('/projects/vpc', function(req, res, next) {
  res.render('fiveprojects/vpc', { title: 'Project 4' });
});

/* GET Project 5 - Network Topology Configuration Project */
router.get('/projects/ntcp', function(req, res, next) {
  res.render('fiveprojects/ntcp', { title: 'Project 5' });
});

module.exports = router;
