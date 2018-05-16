<template>
  <div id="app">
    <header>
      <router-link to="/">Home Page</router-link>
      <router-link to="/adminPage">Admin Page</router-link>
      <router-link to="/betPage">Bet Page</router-link>
      <router-link to="/history">History</router-link>
    </header>
    <h1>IPL Game</h1>
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
    <footer>Copyright © sacros™ ALL RIGHTS ~UN~RESERVED</footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
h1 {
  /* background: #42b983; */
  background: rgb(10, 50, 130);
  color: white;
  width: 100%;
  padding:20px;
}
footer {
  margin-top: 20px;
  /* background: #42b983; */
  background: rgb(10, 50, 130);
  color: white;
  padding:10px;
  /* position: fixed; */
  width: 100%;
  bottom: 0;
}
header {
  /* margin-top: 20px; */
  /* background: #42b983; */
  background: rgb(127, 154, 208);
  color: white;
  padding: 10px;
  /* position: fixed; */
  width: 100%;
  top: 0;
}
</style>
