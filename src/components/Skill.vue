<template>
  <section id="skill" class="skill">
    <h1 class="section-header">MY SKILL</h1>
    <div class="container">
      <div class="flex-grid">
        <a class="card category-card" href="#">
          <img
            class="category-card__img"
            src="../assets/img/nodejs.png"
            alt="nodejs"
          />
          <span class="category-card__title">
            NodeJS
          </span>
        </a>
        <a class="card category-card" href="#">
          <img
            class="category-card__img"
            src="../assets/img/nodejs.png"
            alt="nodejs"
          />
          <span class="category-card__title">
            NodeJS
          </span>
        </a>
        <a class="card category-card" href="#">
          <img
            class="category-card__img"
            src="../assets/img/nodejs.png"
            alt="nodejs"
          />
          <span class="category-card__title">
            NodeJS
          </span>
        </a>
        <a class="card category-card" href="#">
          <img
            class="category-card__img"
            src="../assets/img/nodejs.png"
            alt="nodejs"
          />
          <span class="category-card__title">
            NodeJS
          </span>
        </a>
        <a class="card category-card" href="#">
          <img
            class="category-card__img"
            src="../assets/img/nodejs.png"
            alt="nodejs"
          />
          <span class="category-card__title">
            NodeJS
          </span>
        </a>
        <a class="card category-card" href="#">
          <img
            class="category-card__img"
            src="../assets/img/nodejs.png"
            alt="nodejs"
          />
          <span class="category-card__title">
            NodeJS
          </span>
        </a>
        <a class="card category-card" href="#">
          <img
            class="category-card__img"
            src="../assets/img/nodejs.png"
            alt="nodejs"
          />
          <span class="category-card__title">
            NodeJS
          </span>
        </a>
        <a class="card category-card" href="#">
          <img
            class="category-card__img"
            src="../assets/img/nodejs.png"
            alt="nodejs"
          />
          <span class="category-card__title">
            NodeJS
          </span>
        </a>
        <a class="card category-card" href="#">
          <img
            class="category-card__img"
            src="../assets/img/nodejs.png"
            alt="nodejs"
          />
          <span class="category-card__title">
            NodeJS
          </span>
        </a>
        <a class="card category-card" href="#">
          <img
            class="category-card__img"
            src="../assets/img/nodejs.png"
            alt="nodejs"
          />
          <span class="category-card__title">
            NodeJS
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.skill {
  background-color: #eee;
}
.flex-grid {
  display: flex;
  flex-wrap: wrap;
}
.card {
  padding: 1.5rem;
  background-color: #fff;
  border: 1px solid rgba(11, 95, 236, 0.075);
  border-radius: 3px;
  box-shadow: 0 0.5rem 2.5rem rgba(60, 127, 239, 0.15);
  transition: all 0.2s;
  margin: 1rem;

  &:hover {
    transform: translateY(-5px);
  }
}

.category-card {
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 15rem;

  &__title {
  }

  &__img {
    background-color: red;
    height: 7rem;
    width: 7rem;
  }
}
</style>
