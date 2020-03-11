<template>
  <div id="app">
    <div class="navigation">
      <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />

      <label for="navi-toggle" class="navigation__button">
        <span class="navigation__icon">&nbsp;</span>
      </label>
      <nav class="navigation__menu">
        <ul class="navigation__list">
          <li class="navigation__item">
            <a href="#" class="navigation__link">Home</a>
          </li>
          <li class="navigation__item">
            <a href="#exp" class="navigation__link">Experience</a>
          </li>
          <li class="navigation__item">
            <a href="#skill" class="navigation__link">My skill</a>
          </li>
          <li class="navigation__item">
            <a href="#about" class="navigation__link">About me</a>
          </li>
        </ul>
      </nav>
    </div>
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
@import "assets/scss/style.scss";

.navigation {
  @media only screen and (min-width: 660px) {
    display: none;
  }
  
  &__checkbox {
    display: none;
  }

  &__button {
    background-color: $color-white;
    height: 7rem;
    width: 7rem;
    position: fixed;
    top: 5rem;
    // bottom: 5rem;
    right: 5rem;
    border-radius: 50%;
    z-index: 2000;
    box-shadow: 0 1rem 3rem rgba($color-primary, 0.1);
    text-align: center;
    cursor: pointer;
  }

  &__menu {
    position: fixed;
    top: 7rem;
    // bottom: 7rem;
    right: 7rem;
    z-index: 1500;

    opacity: 0;
    transform: scale(0);
    transform-origin: top right;
    transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  &__list {
    top: 7rem;
    right: 7rem;
    padding: 3rem;
    list-style: none;
    text-align: center;
    width: 100%;
    background: $color-white;
    box-shadow: 0 1rem 3rem rgba($color-primary, 0.1);
    border-radius: 20px;
  }

  &__item {
    &:hover {
      background-color: $color-grey-light;
    }
  }

  &__link {
    font-size: 2.5rem;
    font-weight: 500;
    color: $color-primary;
    text-transform: uppercase;
    text-decoration: none;
  }

  &__checkbox:checked ~ &__menu {
    opacity: 1;
    transform: scale(1);
  }

  //ICON
  &__icon {
    position: relative;
    margin-top: 3.5rem;

    &,
    &::before,
    &::after {
      width: 3rem;
      height: 2px;
      background-color: grey;
      display: inline-block;
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
      transition: all 0.2s;
    }

    &::before {
      top: -0.8rem;
    }
    &::after {
      top: 0.8rem;
    }
  }

  &__button:hover &__icon::before {
    top: -1rem;
  }

  &__button:hover &__icon::after {
    top: 1rem;
  }

  &__checkbox:checked + &__button &__icon {
    background-color: transparent;
  }

  &__checkbox:checked + &__button &__icon::before {
    top: 0;
    transform: rotate(135deg);
  }

  &__checkbox:checked + &__button &__icon::after {
    top: 0;
    transform: rotate(-135deg);
  }
}
</style>
