const express = require('express');
const router = express.Router({ mergeParams: true });
const reviewsController = require('../controllers/reviewsController');

router.post('/', reviewsController.addReview);
router.get('/', reviewsController.getAllReviews);
router.put('/:reviewId', reviewsController.updateReviewById);
router.delete('/:reviewId', reviewsController.deleteReviewById);

module.exports = router;
