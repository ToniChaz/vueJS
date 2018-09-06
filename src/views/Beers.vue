<template>
    <div>
        <h1>This is the Beers list page</h1>
        <p v-if="beers.length === 0">No Beers!!!</p>
        <ul v-else>
            <Beer
                    v-for="beer in beers"
                    v-bind:key="beer.id"
                    v-bind:beer="beer"
                    @deleteBeer="deleteBeer"
            />
        </ul>

        <BeerForm @addBeer="addBeer"/>
    </div>
</template>

<script>
	import Beer from '@/components/Beer.vue'
	import BeerForm from '@/components/BeerForm.vue'

	export default {
		name: 'Beers',
		components: {
			Beer, BeerForm
		},
		computed: {
			beers() {
				return this.$store.state.beersStore.beers
			}
		},
		mounted() {
			this.$store.dispatch('setLoading')
			this.$store.dispatch('fetchBeers').then(() => this.$store.dispatch('hideLoading'))
		},
		methods: {
			addBeer(beerToAdd) {
				this.$store.dispatch('setLoading')
				this.$store.dispatch('addBeer', beerToAdd)

			},
			deleteBeer(beerId) {
				this.$store.dispatch('setLoading')
				this.$store.dispatch('deleteBeer', beerId)
			}
		}
	}
</script>

<style scoped>
    ul {
        list-style-type: none;
        padding: 0;
    }
</style>