var express = require('express');
var router = express.Router();
const axios = require('axios').default;
const DB_URL = "http://127.0.0.1:5984/movies/";
const DB_VIEWS = "_design/views/_view/";


/* GET all movies */
router.get('/', (req, res) => {
    axios.get(DB_URL + DB_VIEWS + 'allMovies')
        .then(function (response) {
            //console.log(response.data.rows);
            res.render('list.ejs', { movies: response.data.rows });
        })
        .catch(function (error) {
            console.log(error);
        });
});

/* show ADD movie form */
router.get('/add', (req, res) => {
    res.render('add.ejs', {});
});

/* ADD movie to db*/
router.post('/add', (req, res) => {
    axios.post(DB_URL, req.body)
        .then(response => res.redirect('/'))
        .catch(error => console.log(error));
});

/* SEARCH form */
router.get('/search', (req, res) => {
    res.render('search.ejs', {});
});

/* FIND a movie*/
router.post('/search', (req, res) => {
axios.get(DB_URL + DB_VIEWS + 'allMovies' + '?key="' + req.body.name + '"')
.then(function (response){
    if(response.data.rows[0])
        res.render('search_result.ejs', { movie: response.data.rows[0] });
    else
        res.render('search_not_found.ejs', {})
    })
    .catch(function (error) {
        console.log(error);
    })
});

/* DELETE a movie */
/*router.post('/delete', (req, res) => {
    axios.get(DB_URL + DB_VIEWS + 'allMovies' + '?key="' + req.body.name + '"')
    .then(function (response){
        if(response.data.rows[0]) {
            var id = response.data.rows[0].value._id
            var rev = response.data.rows[0].value._rev
            axios.delete(DB_URL + id + '?rev=' + rev).then(response => res.redirect('/') ).catch(error => console.log(error))
        }
    })
    .catch(function (error){
        console.log(error);
    })*/


/* DELETE a movie */
router.post('/delete', (req, res) => {
    var id = req.body.id;
    var rev = req.body.rev;
    axios.delete(DB_URL + id + '?rev=' + rev).then(response => res.redirect('/') ).catch(error => console.log(error))
    })

/* show EDIT movie form */
router.get('/edit', (req, res) => {
    res.render('edit.ejs', {});
});

/* EDIT a movie */
router.post('/edit', (req, res) => {
    axios.put(DB_URL, req.body)
        .then(response => res.redirect('/'))
        .catch(error => console.log(error));é
});

module.exports = router;