<template>
  <header class="header">
    <!-- <div class="navbar-container">
      <div class="navbar-list">
        <a class="navbar-item" href="#experience">Experience</a>
        <a class="navbar-item" href="#skill">My skill</a>
        <a class="navbar-item" href="#about-me">My project</a>
        <a class="navbar-item" href="#about-me">About me</a>
      </div>
    </div> -->
    <!-- <nav class="menu_trigger">
      <ul class="menu_trigger">
        <li class="site-nav__item">
          <a class="site-nav__link" href="#">Home</a>
        </li>
        <li class="site-nav__item">
          <a class="site-nav__link" href="#">Experience</a>
        </li>
      </ul>
    </nav> -->
    <div class="container">
      <nav class="top-nav">
        <ul class="top-nav__menu">
          <li class="top-nav__item">
            <a class="top-nav__link" href="#">Home</a>
          </li>
          <li class="top-nav__item">
            <a class="top-nav__link" href="#exp">Experience</a>
          </li>
          <li class="top-nav__item">
            <a class="top-nav__link" href="#skill">My skill</a>
          </li>
          <li class="top-nav__item">
            <a class="top-nav__link" href="#about">About Me</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="information">
      <h1 class="name">Nataphong Somjai</h1>
      <div class="border--short"></div>
      <h2 class="position">Web Developer</h2>
    </div>
  </header>
</template>

<script>
export default {
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {}
};
</script>

<style lang="scss" scope>
.header {
  height: 100vh;
  font-size: 2rem;
  background-color: $color-primary;
  padding: 1.5rem 3rem;
  font-weight: 700;
  color: rgb(255, 255, 255);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  background-image: linear-gradient(
      to right,
      rgba(56, 70, 77, 0.85),
      rgba(15, 19, 20, 0.85)
    ),
    url(../assets/img/2.jpg);
  background-attachment: fixed;

  .menu-trigger {
    width: 100%;
    background-color: #fff;
  }

  @media screen and (max-width: 660px) {
    .container {
      display: none;
    }
  }

  .top-nav {
    &__menu {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
    }

    &__item {
      list-style: none;
      border-bottom: 3px solid #eee;
      text-transform: uppercase;

      // &:not(:last-child) {
      //   margin-right: 10rem;
      // @media only screen and (max-width: 520px) {
      //   margin-right: 3rem;
      // }
      // }

      border-color: transparent;
      transition: border-color 0.2s;

      animation-name: moveInTop;
      animation-duration: 1s;
      animation-timing-function: ease-out;
    }

    &__item:hover {
      color: currentColor;
      border-color: currentColor;
    }

    &__link {
      color: currentColor;
      text-decoration: none;
    }
  }

  .information {
    padding-top: 6rem;
    @media only screen and (max-width: $bp-small) {
      padding-top: 0;
    }
    text-align: center;

    .name {
      font-size: 6rem;
      text-transform: uppercase;
      position: relative;
      line-height: 1.1;
      @media only screen and (max-width: $bp-small) {
        font-size: 4rem;
      }

      animation-name: moveInLeft;
      animation-duration: 1s;
      animation-timing-function: ease-out;
    }

    .border--short {
      width: 30rem;
      border-bottom: 5px solid currentColor;
      position: absolute;
      margin-top: 1rem;
      left: 50%;
      transform: translateX(-50%);
    }

    .position {
      margin-top: 2rem;
      font-size: 5rem;
      @media only screen and (max-width: $bp-small) {
        font-size: 3.5rem;
      }

      animation-name: moveInRight;
      animation-duration: 1s;
      animation-timing-function: ease-out;
    }
  }
}
</style>
