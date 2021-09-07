const express = require('express')
const app = express()
const routes = require('./routes')
const mongoose = require('mongoose')
const path = require('path')
const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')

// Connect MongoDB with mongoose
logger.info('Connecting to: ', config.MONGODB_URI)
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		logger.info('Connected to MongoDB.')
	})
	.catch((error) => {
		logger.error('Error Connection to MongoDB: ', error.message)
	})

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../front-end/build')));

/*
// All remaining requests return the React app, so it can handle routing.
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../front-end/build', 'index.html'));
});
*/

app.use(express.json())
app.use(middleware.requestLogger)
app.use('/api', routes)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

// Run Server
app.listen(config.PORT, () => logger.info(`Server running on Port: ${config.PORT}`))