<template>
  <router-view/>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #409972;
}

.navbar{
  font-size: 22px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(255, 255, 255);
}
.hrFirst{
  border: 2px solid rgb(168, 88, 34);
}
body{
  background: black;
}
</style>
