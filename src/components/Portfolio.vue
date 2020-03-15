<template>
  <section id="portfolio" class="portfolio">
    <div class="container text-white">
      <h1 class="section-header">portfolio</h1>
      <div class="project">
        <div class="project-detail">
          <h2 class="title">
            Decathlon sport places community
          </h2>
          <p class="detail">
            This application is a real project. But not yet published. Developed
            to Decathlon Rangsit Thailand, for people interested in playing
            sports. Can search for sport places location around them and can
            share new locations of sport places that are not available in the
            application. If the user is a member of Decathlon, can book
            Decathlon's sport places.
          </p>
          <h3 class="subtitle">Stack used : VueJS | NodeJS | Mysql</h3>
          <h3 class="subtitle">
            Website URL :
            <a href="https://sport-places.decathlon.co.th/" target="_blank"
              >https://sport-places.decathlon.co.th/</a
            >
          </h3>
        </div>
        <div class="project-image">
          <carousel
            :items="1"
            :autoplay="false"
            :nav="false"
            :autoplayHoverPause="true"
          >
            <div class="image-container">
              <img
                class="image"
                alt="Photo 1"
                src="@/assets/img/project/home.png"
              />
            </div>
            <div class="image-container">
              <img
                class="image"
                alt="Photo 1"
                src="@/assets/img/project/session_screen.png"
              />
            </div>
            <div class="image-container">
              <img
                class="image"
                alt="Photo 1"
                src="@/assets/img/project/about.png"
              />
            </div>
            <div class="image-container">
              <img
                class="image"
                alt="Photo 1"
                src="@/assets/img/project/sportplace_detail.png"
              />
            </div>
            <div class="image-container">
              <img
                class="image"
                alt="Photo 1"
                src="@/assets/img/project/session_detail.png"
              />
            </div>
          </carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  components: { carousel }
};
</script>

<style lang="scss" scoped></style>
