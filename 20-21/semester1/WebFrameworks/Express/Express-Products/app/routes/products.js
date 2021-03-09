var express = require('express');
var router = express.Router();
var fs = require('fs');

fs.readFile('./data/products.json', function read(err, data) {     
    
    var products = JSON.parse(data).products;

    function saveJSON() {
        var newJSON = {};
        newJSON.products = products;

        fs.writeFile('./data/products.json', JSON.stringify(newJSON), (err) => {
            if (err) throw err;
        });
    }

    /* GET all products */
    router.get('/', function(req, res) {
        res.json(products);
    });

    /* GET one product */
    router.get('/:id', function(req, res) {
        let foundProducts = products.filter(function(p) {
            return p.id == req.params.id;
        });

        if(foundProducts.length == 1) {
            res.json(foundProducts[0]);
        }
        else {
            res.json("{'Not found'}");
        }
    });

    /* DELETE one product */
    router.delete('/delete/:id', function(req, res) {
        let keepProducts = products.filter(function(p) {
            return p.id != req.params.id;
        });
        
        products = keepProducts;

        saveJSON();
        res.json(products);
    });

    /* ADD one product */
    router.post('/add', function(req, res) {

        products.push(req.body);

        saveJSON();
        res.json(products);
    });
});

module.exports = router;