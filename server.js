'use strict'

const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 8081
const app = express()
const TIMEOUT = 2000;

app.use(cors())

let bodyParser = require('body-parser')
app.use(bodyParser.json())

let beers = []
app.get('/api/beers', (req, res) => {
	setTimeout(() => res.json({beers}), TIMEOUT)
})
app.post('/api/beers', (req, res) => {
	const beer = {id: 'beer_' + beers.length + 1, beerName: req.body.beerName, graduation: req.body.graduation}
	beers.push(beer)
	setTimeout(() => res.json(beer), TIMEOUT)
})
app.delete('/api/beers/:beerId', (req, res) => {
	beers = beers.filter(beer => beer.id !== req.params.beerId)
	setTimeout(() => res.sendStatus(204), TIMEOUT)
})

app.listen(PORT, 'localhost', (err) => {
	if (err) {
		console.error(err)
		return
	}
	console.log(`server initialized at http://localhost:${PORT}`)
})
