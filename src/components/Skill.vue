<template>
  <section id="skill" class="skill bg-white">
    <h1 class="section-header">MY SKILL</h1>
    <div class="container">
      <div class="flex-grid">
        <div class="card category-card">
          <img
            class="category-card__img"
            src="../assets/img/skill_logo/html_css_js.png"
            alt="Php"
          />
          <b class="category-card__title">
            HTML5 , CSS3 & Javascript
          </b>
          <span class="bar bar-js"></span>
        </div>
        <div class="card category-card">
          <img
            class="category-card__img"
            src="../assets/img/skill_logo/php.png"
            alt="Php"
          />
          <b class="category-card__title">
            Php
          </b>
          <span class="bar bar-php"></span>
        </div>
        <div class="card category-card">
          <img
            class="category-card__img"
            src="../assets/img/skill_logo/mysql.png"
            alt="MySQL"
          />
          <b class="category-card__title">
            MySQL
          </b>
          <span class="bar bar-mysql"></span>
        </div>
        <div class="card category-card">
          <img
            class="category-card__img"
            src="../assets/img/skill_logo/bootstrap.png"
            alt="Bootstrap"
          />
          <b class="category-card__title">
            Bootstrap
          </b>
          <span class="bar bar-bootstrap"></span>
        </div>
        <div class="card category-card">
          <img
            class="category-card__img"
            src="../assets/img/skill_logo/bulma.png"
            alt="Bulma"
          />
          <b class="category-card__title">
            Bulma
          </b>
          <span class="bar bar-bulma"></span>
        </div>
        <div class="card category-card">
          <img
            class="category-card__img"
            src="../assets/img/skill_logo/vue.png"
            alt="Vuejs"
          />
          <b class="category-card__title">
            VueJS
          </b>
          <span class="bar bar-vue"></span>
        </div>
        <div class="card category-card">
          <img
            class="category-card__img"
            src="../assets/img/skill_logo/nodejs.png"
            alt="Nodejs"
          />
          <b class="category-card__title">
            NodeJS
          </b>
          <span class="bar bar-node"></span>
        </div>
        <div class="card category-card">
          <img
            class="category-card__img"
            src="../assets/img/skill_logo/mongo.png"
            alt="Mongodb"
          />
          <b class="category-card__title">
            MongoDB
          </b>
          <span class="bar bar-mongo"></span>
        </div>
        <div class="card category-card">
          <img
            class="category-card__img"
            src="../assets/img/skill_logo/sass.png"
            alt="Sass"
          />
          <b class="category-card__title">
            Sass
          </b>
          <span class="bar bar-sass"></span>
        </div>
        <div class="card category-card">
          <img
            class="category-card__img"
            src="../assets/img/skill_logo/git.png"
            alt="Git"
          />
          <b class="category-card__title">
            Git
          </b>
          <span class="bar bar-git"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$color-vue: #41b883;
$color-node: #4bae4f;
$color-node2: #429246;
$color-mongo: #68ae55;
$color-js: #fed93d;
$color-php: #36447f;
$color-mysql: #4479a1;
$color-sass: #cc6699;
$color-bootstrap: #8854d6;
$color-bulma: #00d1b2;
$color-git: #ff8080;

.flex-grid {
  display: flex;
  flex-wrap: wrap;
  margin-top: 5rem;
}
.card {
  padding: 3rem;
  background-color: #fff;
  border: 1px solid rgba(11, 95, 236, 0.075);
  border-radius: 3px;
  box-shadow: 0 0.5rem 2.5rem rgba(60, 127, 239, 0.15);
  transition: all 0.2s;
  margin: 10px;
  position: relative;
  width: calc((100% / 5) - 20px);

  @media screen and (max-width: 1280px) {
    width: calc((100% / 3) - 20px);
  }

  @media screen and (max-width: 900px) {
    width: calc((100% / 2) - 20px);
  }

  @media screen and (max-width: 385px) {
    width: 100%;
  }

  &:hover {
    cursor: pointer;
    transform: translateY(-10px);

    .bar.bar-vue {
      background-color: $color-vue;
    }
    .bar.bar-vue {
      background-color: $color-vue;
    }
    .bar.bar-node {
      background-color: $color-node;
    }
    .bar.bar-mongo {
      background-color: $color-mongo;
    }
    .bar.bar-js {
      background-color: $color-js;
    }
    .bar.bar-php {
      background-color: $color-php;
    }
    .bar.bar-mysql {
      background-color: $color-mysql;
    }
    .bar.bar-sass {
      background-color: $color-sass;
    }
    .bar.bar-bootstrap {
      background-color: $color-bootstrap;
    }
    .bar.bar-bulma {
      background-color: $color-bulma;
    }
    .bar.bar-git {
      background-color: $color-git;
    }
  }

  .bar {
    position: absolute;
    width: 100%;
    height: 8px;
    bottom: 0;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;

    &.bar-vue {
      background-color: lighten($color-vue, 30%);
    }
    &.bar-node {
      background-color: lighten($color-node, 30%);
    }
    &.bar-mongo {
      background-color: lighten($color-mongo, 30%);
    }
    &.bar-js {
      background-color: lighten($color-js, 30%);
    }
    &.bar-php {
      background-color: lighten($color-php, 30%);
    }
    &.bar-mysql {
      background-color: lighten($color-mysql, 30%);
    }
    &.bar-sass {
      background-color: lighten($color-sass, 30%);
    }
    &.bar-bootstrap {
      background-color: lighten($color-bootstrap, 30%);
    }
    &.bar-bulma {
      background-color: lighten($color-bulma, 30%);
    }
    &.bar-git {
      background-color: lighten($color-git, 15%);
    }
  }
}

.category-card {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    font-size: 2rem;
    @media screen and (max-width: 450px) {
      font-size: 1.5rem;
    }
    margin-top: 3rem;
    text-align: center;
  }

  &__img {
    height: 12rem;
    @media screen and (max-width: 450px) {
      height: 10rem;
    }
  }
}
</style>
