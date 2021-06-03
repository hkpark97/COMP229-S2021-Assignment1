"use strict";

var express = require('express');
var router = express.Router();

//get home page
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Index' });
});

//get home page
router.get('/home', function (req, res, next) {
    res.render('index', { title: 'Home' });
});

//get about page
router.get('/about', function (req, res, next) {
    res.render('about', { title: 'About' });
});

//get projects page
router.get('/projects', function (req, res, next) {
    res.render('projects', { title: 'Projects' });
});

//get services page
router.get('/services', function (req, res, next) {
    res.render('services', { title: 'Services' });
});

//get contact page
router.get('/contact', function (req, res, next) {
    res.render('contact', { title: 'Contact' });
});
//# sourceMappingURL=index.js.map

module.exports = router;