<template>
  <section id="portfolio" class="portfolio">
    <div class="container text-white">
      <h1 class="section-header">portfolio</h1>
      <div v-for="(project, index) in projects" :key="project.name">
        <div class="project">
          <div class="project-detail">
            <h2 class="title">
              {{ project.name }}
            </h2>
            <p class="detail">
              {{ project.details }}
            </p>
            <h3 class="subtitle">Stack used: {{ project.stack }}</h3>
            <h3 class="subtitle">
              <a :href="project.url" target="_blank">
                Live Demo
              </a>
            </h3>
            <h3 class="subtitle">
              <a :href="project.repository" target="_blank">
                GitHub Repository
              </a>
            </h3>
          </div>
          <div class="project-image">
            <carousel
              :items="1"
              :autoplay="false"
              :nav="false"
              :autoplayHoverPause="true"
            >
              <div
                v-for="image in project.images"
                :key="image"
                class="image-container"
                :style="{
                  'background-image':
                    'url(' + require(`../assets/img/project/${image}`) + ')',
                }"
              ></div>
            </carousel>
          </div>
        </div>
        <hr v-if="index !== projects.length - 1" />
      </div>
    </div>
  </section>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
  components: { carousel },
  data() {
    return {
      projects: [
        {
          name: 'Netflix Clone',
          details:
            'The demo project that clone design from Netflix developed with NextJS and use NextAuth for authentication that can use both email- password and OAuth with Google and GitHub',
          stack: 'NextJS | Tailwind | MongoDB',
          url: 'https://nextjs-nf-clone-swart.vercel.app/',
          repository: 'https://github.com/mmarone/nextjs-netflix-clone',
          images: ['project-1-1.png', 'project-1-2.png', 'project-1-3.png'],
        },
        {
          name: 'Shoes Store',
          details:
            'The demo e-commerce project was developed with NextJS and Tailwind this project have only UI for now but will integrate with backend API in the future  😅',
          stack: 'NextJS | Tailwind',
          url: 'https://nextjs-shoes-store-mauve.vercel.app/',
          repository: 'https://github.com/mmarone/nextjs-shoes-store',
          images: ['project-2-1.png', 'project-2-2.png', 'project-2-3.png'],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
