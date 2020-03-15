<template>
  <div id="app">
    <navigation />
    <Home />
    <Experience />
    <Portfolio />
    <Skill />
    <About />
    <Footer />
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import Home from "./components/Home.vue";
import Experience from "./components/Experience.vue";
import Skill from "./components/Skill.vue";
import Portfolio from "./components/Portfolio.vue";
import About from "./components/About.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Navigation,
    Home,
    Experience,
    Skill,
    Portfolio,
    About,
    Footer
  }
};
</script>

<style lang="scss">
@import "assets/scss/main.scss";
</style>
