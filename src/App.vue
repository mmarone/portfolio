<template>
  <div id="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Main,
    Footer
  }
};
</script>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #2c2c2c;
$primary-invert: findColorInvert($primary);

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

@import "assets/scss/style.scss";
</style>
