<template>
  <div id="container">
    <header>
      <nav>
        <router-link to="/" class="nav-link">Home</router-link> |
        <router-link to="/about" class="nav-link">About</router-link> |
        <router-link to="/contact" class="nav-link">Contact Us</router-link> 
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>
<style>
#container {
  background-color: #A4BC92;
  color: #fff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  padding: 50px;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}

.nav-link {
  color: #000000;
  text-decoration: none;
  margin: 0 20px;
  font-size: 20px;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
}

.nav-link:hover {
  transform: scale(1.1);
  color: #fff;
}
</style>
<script>
export default {
  name: 'App',
  data() {
    return {
      filterDone: false
    }
  }
}
</script>