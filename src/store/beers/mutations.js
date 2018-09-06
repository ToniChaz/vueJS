export default {
	setBeers(state, response) {
		state.beers = response.data.beers
	},
	addBeer(state, beer) {
		state.beers.push(beer)
		this.state.loading = false
	},
	deleteBeer(state, beerId) {
		state.beers = state.beers.filter((beer)=> beer.id !== beerId)
		this.state.loading = false
	}
}