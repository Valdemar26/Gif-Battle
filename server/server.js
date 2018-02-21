var express    = require('express');
var Webtask    = require('webtask-tools');
var bodyParser = require('body-parser');
var request    = require('request');
var _          = require('lodash');
var app        = express();


app.use(bodyParser.json());


app.get('/', function (req, res) {
    res.send('Hello, Valdemar');
});

// CREATE SECTION ============================

// GET a random gif from giphy. return that to our user
app.get('/random', (req, res) => {

    // get a gif from giphy
    const apiKey = 'ztAX0mddDx2rHuWPa0zOlU9mWCRovyxt';
const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&filter=G`;
request(url, (error, response, body) => {
    body = JSON.parse(body);
const gif = {
    id:  body.data.id,
    url: body.data.image_original_url
};
res.json(gif);
});
});

// POST: create a gif with a caption
app.post('/', (req, res) => {
    // store into our webtaskContext.storage
    req.webtaskContext.storage.get((err, data) => {
    data = data || [];
data.push(req.body);

req.webtaskContext.storage.set(data, err => {
    res.json({message: 'Successfully stored gif!'});
})
});
});

// BATTLE SECTION ==============================

// GET: return a battle (with 2 gifs)
app.get('/versus', (req, res) => {

    // shuffle(using lodash) array with gifs to get random gifs
    req.webtaskContext.storage.get((err, data) => {
    data = _.shuffle(data);
const twoGifs = data.slice(0, 2); // take first two gifs
res.json(twoGifs);
});
});

// POST: vote on a certain git
app.post('/vote', (req, res) => {

    // find the index of the gif in our database array
    req.webtaskContext.storage.get((err, data) => {
    const index = data.findIndex(gif => gif.id === req.body.id);

// increment the votes to our gif by index
data[index].votes += 1;

// return a success message
req.webtaskContext.storage.set(data, err => {
    res.json({ message: 'Successfully voted!' });
});
});
});


// LEADERBOARD SECTION =========================
app.get('/leaderboard', (req, res) => {
    req.webtaskContext.storage.get((err, data) => {
    data = data.sort((a,b) => b.votes - a.votes);
res.json(data);
});
});



module.exports = Webtask.fromExpress(app);

