<template>
  <div id="app">
    <Header/>
    <Main/>
    <Footer/>
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
#app {
  @import url("https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700");
  font-family: "Quicksans", sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
