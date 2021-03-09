var express = require('express');
var router = express.Router();
const axios = require('axios').default;
const DB_URL = "http://127.0.0.1:5984/movies/";
const DB_ACTOR_VIEW = "_design/views/_view/actorView";

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

/* SEARCH form */
router.get('/search', (req, res) => {
  res.render('search.ejs', {});
});

/* FIND a movie*/
router.post('/search', (req, res) => {
axios.get(DB_URL + DB_ACTOR_VIEW + 'allMovies' + '?key="' + req.body.name + '"')
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

module.exports = router;