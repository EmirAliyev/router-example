<template>
  <div id="app">
    <p>
      <a href="" @click.prevent="changePage('Home')">Home</a> |
      <a href="" @click.prevent="changePage('About')">About</a> | 
      <a href="" @click.prevent="changePage('Noname')">Noname</a>
    </p>
    <Home v-if="currentPage === 'Home'" />
    <About v-else-if="currentPage === 'About'" />
    <div v-else>404 Страница не найдена</div>
  </div>
</template>

<script>
import Home from './pages/Home.vue'
import About from './pages/About.vue'

export default {
  name: 'App',
  components: {
    Home,
    About
  },
  data() {
    return {
      currentPage: 'Home',
      loadedData: [],
      loading: true
    }
  },
  created() {
    // this.fetchData()
  },
  methods: {
    fetchData() {
      setTimeout(() => {
        this.loadedData = [1, 2, 3, 4, 5]
        this.loading = false
      }, 5000)
    },
    changePage(pageName) {
      this.currentPage = pageName
    }
  }
}
</script>

<style>
.custom-class {
  margin: auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
