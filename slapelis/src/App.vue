<template>
  <div id="app">
    <div id="nav">
      <div>
        <router-link to="/">Home</router-link>&nbsp;|
        <router-link to="/about">About</router-link>&nbsp;|
        <router-link to="/test">Test</router-link>&nbsp;
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Montserrat', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  background-color: #3a405a;
  display: flex;
  justify-content: center;
  padding: 2vh;
  min-width: 100vw;
  color: white;
  font-size: 3vh;
  position: fixed;
  height: auto;
}

#nav a {
  color: white;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
