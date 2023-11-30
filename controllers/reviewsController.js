const Movie = require('../models/movie');

exports.addReview = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.movieId);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }

        const newReview = req.body;
        movie.reviews.push(newReview);
        await movie.save();

        res.status(201).json(newReview);
    } catch (error) {
        res.status(500).json({ message: 'Error adding review', error: error.message });
    }
};

exports.getAllReviews = async (req, res) => {
    try {
        const { page = 1, pageSize = 10 } = req.query;
        const movie = await Movie.findById(req.params.movieId);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }

        const reviews = movie.reviews
            .slice((page - 1) * pageSize, page * pageSize);

        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching reviews', error: error.message });
    }
};

exports.updateReviewById = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.movieId);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }

        const reviewIndex = movie.reviews.findIndex(review => review._id.toString() === req.params.reviewId);
        if (reviewIndex === -1) {
            return res.status(404).json({ message: 'Review not found' });
        }

        const updatedReview = Object.assign(movie.reviews[reviewIndex], req.body);
        await movie.save();

        res.json(updatedReview);
    } catch (error) {
        res.status(500).json({ message: 'Error updating review', error: error.message });
    }
};

exports.deleteReviewById = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.movieId);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }

        const reviewIndex = movie.reviews.findIndex(review => review._id.toString() === req.params.reviewId);
        if (reviewIndex === -1) {
            return res.status(404).json({ message: 'Review not found' });
        }

        const deletedReview = movie.reviews.splice(reviewIndex, 1);
        await movie.save();

        res.json({ message: 'Review deleted successfully', deletedReview });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting review', error: error.message });
    }
};
