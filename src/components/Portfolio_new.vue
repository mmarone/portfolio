<template>
  <section id="portfolio" class="portfolio">
    <div class="container text-white">
      <h1 class="section-header">portfolio</h1>
      <div
        style="display: flex; gap: 24px;justify-content: center;margin-top: 24px;"
      >
        <div
          class="showcase-item"
          :style="{
            'background-image':
              'url(' + require('../assets/img/project-1.png') + ')',
          }"
        >
          <div class="meta-content">
            <p>
              Netflix clone
            </p>
            <a href="https://nextjs-nf-clone-swart.vercel.app/" target="_blank">
              Live demo
            </a>
          </div>
        </div>
        <div
          class="showcase-item"
          :style="{
            'background-image':
              'url(' + require('../assets/img/project-2.png') + ')',
          }"
        >
          <div class="meta-content">
            <p>
              Shoes store
            </p>
            <a
              href="https://nextjs-shoes-store-mauve.vercel.app/"
              target="_blank"
            >
              Live demo
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import carousel from 'vue-owl-carousel'
export default {
  // components: { carousel },
}
</script>

<style lang="scss" scoped>
.showcase-item {
  color: black;
  border-radius: 12px;
  font-size: 2rem;
  cursor: pointer;
  position: relative;
  width: 256px;
  height: 256px;
  transition: transform 0.2s;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &:hover {
    transform: scale(110%);
  }

  &:hover .meta-content {
    display: block;
  }

  .meta-content {
    display: none;
    font-weight: bold;
    color: black;
    position: absolute;
    bottom: 16px;
    left: 16px;
    padding: 12px;

    background: white;
    opacity: 50%;
    backdrop-filter: blur(7.5px);
    border-radius: 12px;

    a {
      color: black;
    }
  }
}
</style>
