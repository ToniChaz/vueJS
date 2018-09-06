import Api from '@/service/Api'

export default {
	fetchBeers () {
		return Api().get('/api/beers')
	},
	addBeer (beer) {
		return Api().post('/api/beers', beer)
	},
	deleteBeer (beerId) {
		return Api().delete(`/api/beers/${beerId}`)
	}
}