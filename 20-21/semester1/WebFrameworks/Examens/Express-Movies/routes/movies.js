var express = require('express');
var router = express.Router();
var fs = require('fs');

fs.readFile('movies.json', function read(err, data) {
    var movies = JSON.parse(data).movies;

    function saveJSON() {
        var newJSON = {};
        newJSON.movies = movies;

        fs.writeFile('movies.json', JSON.stringify(newJSON), (err) => {
            if (err) throw err;
        });
    }

    /* GET all movies */
    router.get('/', function(req, res){
        res.json(movies);
    });

     /* GET one movie */
     router.get('/:id', function(req, res) {
        let foundMovies = movies.filter(function(p) {
            return p.id == req.params.id;
        });

        if(foundMovies.length == 1) {
            res.json(foundMovies[0]);
        }
        else {
            res.json("{'Not found'}");
        }
    });

    /* DELETE one product */
    router.get('/delete/:id', function(req, res) {
        let keepMovies = movies.filter(function(m) {
            return m.id != req.params.id;
        });
        
        movies = keepMovies;

        saveJSON();
        res.json(movies);
    });

    /* ADD one product */
    router.post('/add', function(req, res) {

        movies.push(req.body);

        saveJSON();
        res.json(movies);
    });
});


module.exports = router;