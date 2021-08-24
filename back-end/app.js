const express = require('express')
const path = require('path')
const app = express()

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../front-end/build')));

// Answer API requests.
app.get('/api', (req, res) => {
	res.set('Content-Type', 'application/json');
	res.send('{"message":"Hello from the custom server!"}');
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../front-end/build', 'index.html'));
});

module.exports = app