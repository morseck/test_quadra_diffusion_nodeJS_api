//les imports
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
var apiRouter = require('./apiRouter').router;

const app = express();

//les middlewares
app.use(cors({ origin: true }));

//Routes de tous les api
app.use('/api/', apiRouter)

app.get('/', (req, res) => {
    return res.status(200).send('Tests');
});



exports.app = functions.https.onRequest(app);