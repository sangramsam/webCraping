var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');

/* GET home page. */
router.get('/', function (req, res, next) {
    var data = [];
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
           /* $('span.comhead').each(function (i, element) {
                var a = $(this).prev();
                var rank = a.parent().parent().text();
                var title = a.text();
                var url = a.attr('href');
                var subtext = a.parent().parent().next().children('.subtext').children();
                var points = $(subtext).eq(0).text();
                var username = $(subtext).eq(1).text();
                var comments = $(subtext).eq(2).text();
                // Our parsed meta data object
                var metadata = {
                    rank: parseInt(rank),
                    title: title,
                    url: url,
                    points: parseInt(points),
                    username: username,
                    comments: parseInt(comments)
                };
                data.push(metadata);
                console.log(metadata);
                //res.send(metadata);
            });*/
            res.render('index', { title: temp });
        }

    });
});

module.exports = router;
