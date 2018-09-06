<template>
    <div>
        <b>{{ count }}</b>
        <p>
            <button @click="decrement"> -</button>
            <button @click="increment"> +</button>
        </p>
    </div>
</template>

<script>
	export default {
		name: 'Counter',
		computed: {
			count() {
				return this.$store.state.count
			}

		},
		methods: {
			increment: function () {
				this.$store.dispatch('increment')

			},
			decrement: function () {
				if (this.$store.state.count > 0) {
					this.$store.dispatch('decrement')
				}

			}
		}
	}
</script>
