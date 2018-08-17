<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
$maingrey: #2c3e50;
$maingreen: #276e4e;
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $maingrey;
}
#nav {
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.7);
  a {
    font-weight: bold;
    color: $maingrey;
    line-height: 3;
    border-radius: 5px;
    background-color: lighten($maingrey, 50%);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.7);
    margin: 3px;
    width: 150px;
    height: 50px;
    display: inline-block;
    transition: all 0.5s ease;
    &.router-link-exact-active {
      color: $maingreen;
      background-color: lighten($maingreen, 50%);
    }
  }
}
</style>
