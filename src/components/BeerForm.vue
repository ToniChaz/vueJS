<template>
    <div>
        <p>Name: <input type="text" v-model="beerName"></p>
        <p>Graduation <input type="text" v-model="graduation"></p>
        <p>
            <button type="button" @click="addBeer">Add Beer</button>
        </p>
    </div>
</template>

<script>
	export default {
		name: 'BeerForm',
		data() {
			return {
				beerName: '',
				graduation: 0.0
			}
		},
		methods: {
			addBeer: function () {
				if (this.beerName && this.graduation) {
					this.$emit('addBeer', {beerName: this.beerName, graduation: this.graduation});
					this.beerName = ''
					this.graduation = 0.0
				}
			}
		}
	}
</script>

<style scoped>
</style>