<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/about">About</router-link>
            |
            <router-link to="/beers">Beers</router-link>
        </div>
        <div v-if="loading" class="loading">
            <img alt="Beers loading" src="./assets/loading.gif">
        </div>
        <router-view/>
    </div>
</template>

<script>
	export default {
		name: 'App',
		computed: {
			loading() {
				return this.$store.state.loading
			}
		}
	}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    a {
        color: #42b983;
        text-decoration: none;
    }

    button {
        padding: 7px 13px;
        margin: 5px;
        border-radius: 5px;
        cursor: pointer;
        background: #42b983;
        color: #ffffff;
        border: none;
    }

    button:focus {
        outline: none;
    }

    .loading {
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.7);
    }
</style>
