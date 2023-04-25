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
            <h3 v-if="project.apiRepository" class="subtitle">
              <a :href="project.apiRepository" target="_blank">
                GitHub Repository (API)
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
            'The demo project that clone design from Netflix have authentication with NextAuth that provide user to use both of email-password and OAuth with Google and GitHub',
          stack: 'NextJS | Tailwind | MongoDB',
          url: 'https://nextjs-nf-clone-swart.vercel.app/',
          repository: 'https://github.com/mmarone/nextjs-netflix-clone',
          images: ['project-1-1.png', 'project-1-2.png', 'project-1-3.png'],
        },
        {
          name: 'Shoes Store',
          details:
            'The demo e-commerce project has products listing, categories and a cart system, using redux as state mangement for handle cart system state',
          stack: 'NextJS | Tailwind | NestJS | PostgreSQL',
          url: 'https://nextjs-shoes-store-mauve.vercel.app/',
          repository: 'https://github.com/mmarone/nextjs-shoes-store',
          apiRepository: 'https://github.com/mmarone/nestjs-shoe-store',
          images: ['project-2-1.png', 'project-2-2.png', 'project-2-3.png'],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
