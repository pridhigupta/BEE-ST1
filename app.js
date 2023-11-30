const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://pridhi:Pridhi1062@cluster0.raivfgo.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(bodyParser.json());

const moviesRouter = require('./routes/movies');
const reviewsRouter = require('./routes/reviews');

app.use('/api/movies', moviesRouter);
app.use('/api/movies/:movieId/reviews', reviewsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
