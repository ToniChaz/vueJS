<template>
  <div class="home">
    <img width="200" alt="Beers logo" src="../assets/logo.png">
    <Home msg="Welcome to My Beers App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'

export default {
  name: 'home',
  components: {
		Home
  }
}
</script>
