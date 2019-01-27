<template>
  <div id="app">
    <div id="nav">
      <div>
        <router-link to="/">home</router-link>&nbsp;|
        <router-link to="/about">about</router-link>&nbsp;|
        <router-link to="/test">test</router-link>&nbsp;
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
::selection {
  background-color: black;
}
#app {
  font-family: 'Montserrat', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;
  margin: 0;
  padding: 0;
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
  z-index: 999;
}

#nav a {
  color: white;
}

#nav a.router-link-exact-active {
  color: #f47171;
}
</style>
