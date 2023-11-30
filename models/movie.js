const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true, maxLength: 255 },
    description: { type: String, required: true, maxLength: 1000 },
    genre: { type: String, required: true },
    releaseYear: { type: Number, required: true, min: 1800, max: new Date().getFullYear() },
    reviews: [
        {
            content: { type: String, required: true, maxLength: 500 },
            rating: { type: Number, required: true, min: 1, max: 5 },
            author: { type: String, required: true },
            createdAt: { type: Date, default: Date.now },
        },
    ],
});

module.exports = mongoose.model('Movie', movieSchema);
