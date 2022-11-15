<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Name: {{name}}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
  },
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave')
    next()
  }
}
</script>
