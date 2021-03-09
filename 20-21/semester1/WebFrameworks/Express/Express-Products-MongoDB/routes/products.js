var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
var db;

MongoClient.connect('mongodb://localhost:27017', (err, database) => {
    if (err) return console.log(err);
    db = database.db('products');

    /* GET ALL PRODUCTS */
    router.get('/', (req, res) => {
        db.collection('items').find().toArray((err, result) => {
            if (err) return res.send(500, err);
            res.render('list.ejs', { products: result });
        });
    });

    /* SHOW ADD PRODUCT FORM */
    router.get('/add', (req, res) => {
        res.render('add.ejs', {});
    });

    /* ADD PRODUCT TO DB */
    router.post('/add', (req, res) => {
        db.collection('items').insertOne(req.body, (err, result) => {
            if (err) return res.send(500, err);
            res.redirect('/');
        });
    });

    /* SEARCH FORM */
    router.get('/search', (req, res) => {
        res.render('search.ejs', {});
    });

    /* FIND A PRODUCT */
    router.post('/search', (req, res) => {
        var query = { name: req.body.name };
        console.log(query);
        db.collection('items').findOne(query, (err, result) => {
            if (err) return res.send(500, err);
            if(result == '')
                res.render('search_not_found.ejs', {});
            else
                res.render('search_result.ejs', { product: result })
        });
    });

    /* DELETE A PRODUCT */
    router.delete('/delete', (req, res) => {
        db.collection('items').findOneAndDelete({ id: req.body.id }, (err, result) => {
            if (err) return res.send(500, err);
            res.redirect('/');
        });
    });
});

module.exports = router;
