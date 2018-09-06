<template>
    <li>
        Beer: {{ beer.beerName }}, {{ beer.graduation }}%
        <button type="button" @click="deleteBeer"> -</button>
    </li>
</template>

<script>
	export default {
		name: 'Beer',
		props: {
			beer: Object
		},
		methods: {
			deleteBeer: function () {
				this.$emit('deleteBeer', this.beer.id);
			}
		}
	}
</script>