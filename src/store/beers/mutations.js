export default {
	setBeers(state, response) {
		state.beers = response.data.beers
	},
	addBeer(state, beer) {
		state.beers.push(beer)
		state.loading = false
	},
	deleteBeer(state, beerId) {
		state.beers = state.beers.filter((beer)=> beer.id !== beerId)
		state.loading = false
	}
}