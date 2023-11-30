const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.post('/', moviesController.createMovie);
router.get('/', moviesController.getAllMovies);
router.get('/:movieId', moviesController.getMovieById);
router.put('/:movieId', moviesController.updateMovieById);
router.delete('/:movieId', moviesController.deleteMovieById);

module.exports = router;
