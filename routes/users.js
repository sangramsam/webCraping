var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
/* GET users listing. */
router.get('/', function(req, res, next) {
    request('http://enterprisesmail.com/vow/beta/about-us', function (error, response, html) {
        if (!error && response.statusCode == 200) {

            var $ = cheerio.load(html);
            var desc=$('.small-container').text();
            var title=desc;
            var heading=$('.aboutus-holder .heading').text();
            var temp={
                heading:heading,
                content:desc
            }
            res.render('users', { title: temp });
        }

    });
});

module.exports = router;
