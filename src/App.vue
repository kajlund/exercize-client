<script setup>
  import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div id="layout">
    <header>
        <nav>
          <RouterLink to="/">Home</RouterLink> |
          <RouterLink to="/about">About</RouterLink>
        </nav>
    </header>
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
  #layout {
    text-align: center;
    /* color: #2c3e50; */
  }
  nav {
    padding: 30px;
  }
  nav a {
    font-weight: bold;
    color: #42b983;
  }
  nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
