var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express',
        user:req.user
    });
});
router.get('/pcmasterrace', function(req, res, next) {
    var unirest = require('unirest');
    unirest.get("https://byroredux-metacritic.p.mashape.com/game-list/pc/coming-soon")
        .header("X-Mashape-Key", "mgJXDeuxhUmshog39jEw2pJSRkQDp1vNOBWjsnzDkSjYxIxnvl")
        .header("Accept", "application/json")
        .end(function(result) {
            res.render('game', {
                title: 'Express',
                juegos: result.body.results
            });
        });
});



module.exports = router;
