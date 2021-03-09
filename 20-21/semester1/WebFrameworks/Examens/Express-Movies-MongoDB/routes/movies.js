var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient
var db;

MongoClient.connect('mongodb://localhost:27017', (err, database) => {
    if (err) return console.log(err);
    db = database.db('movies');

    /* GET all movies */
    router.get('/', (req, res) => {
        db.collection('titles').find().toArray((err, result) => {
            if (err) return res.send(500, err);
            res.render('list.ejs', { movies: result });
        });
    });

    /* show ADD movie form */
    router.get('/add', (req, res) => {
        res.render('add.ejs', {});
    });

    /* ADD movie to db*/
    router.post('/add', (req, res) => {
        db.collection('titles').insertOne(req.body, (err, result) => {
            if (err) return res.send(500, err);
            res.redirect('/');
        });
    });

    /* SEARCH form */
    router.get('/search', (req, res) => {
        res.render('search.ejs', {});
    });

    /* FIND a movie*/
    router.post('/search', (req, res) => {
        var query = { name: req.body.name };
        console.log(query);
        db.collection('titles').findOne(query, (err, result) => {
            if (err) return res.send(500, err);
            if(result == '')
                res.render('search_not_found.ejs', {});
            else
                res.render('search_result.ejs', { product: result })
        });
    });

    /* DELETE a movie */
    router.delete('/delete', (req, res) => {
        db.collection('titles').findOneAndDelete({ id: req.body.id }, (err, result) => {
            if (err) return res.send(500, err);
            res.redirect('/');
        });
    });
});

    module.exports = router;