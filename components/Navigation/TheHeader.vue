<template>
<div class="header-container">
  <header class="the-header">
    <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
    <div class="logo">
      <nuxt-link to="/">Kabilesh </nuxt-link>
    </div>
    <div class="spacer"></div>
    <div class="navigation-items">
      <ul class="nav-list">
        <li class="nav-item"><nuxt-link to="/">Home</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/skills">Skills</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/projects">Projects</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/expirience">Expirience</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/contact">Contact</nuxt-link></li>
      </ul>
    </div>
  </header>
</div>
</template>

<script>
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle
  }
};
</script>


<style scoped>
.header-container {
  height: 60px;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: transparent;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
}

.logo {
  margin: 0 10px;
  text-align: center;
  font-family: 'Metal Mania', cursive;
  font-size: 40px;

}
.nav-item:hover{
        box-shadow: 0px 5px 10px red;
}
.logo a {
  text-decoration: none;
  color: indigo;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: 0 20px;
  font-size: 32px;
}

.nav-item a {
  text-decoration: none;
  color: indigo;
  font-family: 'Metal Mania', cursive;
}

.nav-item a:hover,
.nav-item a:active {
  color: red;
}
</style>
