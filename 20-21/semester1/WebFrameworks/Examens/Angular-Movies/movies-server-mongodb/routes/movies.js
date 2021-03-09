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
            if (err) return
            res.json(result)
        });
    });

    /* ADD movie to db*/
    router.post('/add', (req, res) => {
        db.collection('titles').insertOne(req.body)
    });

    /* SEARCH all movies */
    router.post('/searchAll', (req, res) => {
        //var query = { name: req.body.name }
        console.log(req.body.name);
        var query = { name: new RegExp('^' + req.body.name) }
        db.collection('titles').find(query).toArray((err, result) => {
            if (err) return
            res.json(result)
        })
    })

    /* SEARCH one movie */
    router.post('/searchOne', (req, res) => {
        var query = { name: req.body.name }
        db.collection('titles').find(query).toArray((err, result) => {
            if (err) return
            res.json(result)
        })
    })

    /* DELETE a movie */
    router.delete('/delete/:name', (req, res) => {
        db.collection('titles').findOneAndDelete({ name: req.params.name })
    });

    /* EDIT a movie */
    router.post('/edit', (req, res) => {
        db.collection('titles').replaceOne({ name: req.body.name }, req.body)
    })
});

module.exports = router;