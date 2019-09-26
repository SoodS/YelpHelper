const express = require('express');
const cors = require('cors');

const yelpRoute = require('./routes/yelpRoute');

let app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.options('*', cors());

app.use('/yelp', yelpRoute);

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});