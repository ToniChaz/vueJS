import BeersService from '@/service/BeersService'

export default {
	async fetchBeers(context) {
		const response = await BeersService.fetchBeers()
		context.commit('setBeers', response)
	},
	async addBeer(context, beer) {
		const response = await BeersService.addBeer(beer)
		context.commit('addBeer', response.data)
	},
	async deleteBeer(context, beerId) {
		await BeersService.deleteBeer(beerId)
		context.commit('deleteBeer', beerId)
	}
}