<template>
  <section id="skill" class="skill bg-white">
    <h1 class="section-header">MY SKILL</h1>
    <div class="container">
      <!-- <div v-for="(skills, key) in skills" :key="key">
        <h2 class="skill-header">{{ mapSkillText(key) }}</h2>
        <div class="flex-grid" style="justify-content: center;">
          <div
            v-for="skill in skills"
            :key="skill.label"
            class="card category-card"
          >
            <img
              class="category-card__img"
              :src="require(`../assets/img/skill_logo/${skill.logo}.png`)"
              :alt="`${skill.label}`"
            />
            <b class="category-card__title"> {{ skill.label }} </b>
            <span class="bar" :class="`${skill.class}`"></span>
          </div>
        </div>
      </div> -->
      <div class="flex-grid">
        <div
          v-for="skill in skill2"
          :key="skill.label"
          class="card category-card"
        >
          <img
            class="category-card__img"
            :src="require(`../assets/img/skill_logo/${skill.logo}.png`)"
            :alt="`${skill.label}`"
          />
          <b class="category-card__title"> {{ skill.label }} </b>
          <span class="bar" :class="`${skill.class}`"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skills: {
        programmingLanguage: [
          {
            label: 'HTML5, CSS3 & Javascript',
            logo: 'html_css_js',
            class: 'bar-js',
          },
          {
            label: 'Sass',
            logo: 'sass',
            class: 'bar-sass',
          },
          {
            label: 'NodeJS',
            logo: 'nodejs',
            class: 'bar-node',
          },
          {
            label: 'Typescript',
            logo: 'typescript',
            class: 'bar-typescript',
          },
        ],
        frameworks: [
          {
            label: 'Vue',
            logo: 'vue',
            class: 'bar-vue',
          },
          {
            label: 'React',
            logo: 'react',
            class: 'bar-react',
          },
          {
            label: 'Bootstrap',
            logo: 'bootstrap',
            class: 'bar-bootstrap',
          },
          {
            label: 'Bulma',
            logo: 'bulma',
            class: 'bar-bulma',
          },
          {
            label: 'Tailwind',
            logo: 'tailwind',
            class: 'bar-tailwind',
          },
        ],
        database: [
          {
            label: 'MySQL',
            logo: 'mysql',
            class: 'bar-mysql',
          },
          {
            label: 'MongoDB',
            logo: 'mongo',
            class: 'bar-mongo',
          },
        ],
        tools: [
          {
            label: 'Git',
            logo: 'git',
            class: 'bar-git',
          },
          {
            label: 'Docker',
            logo: 'docker',
            class: 'bar-docker',
          },
          {
            label: 'k8s (Basic)',
            logo: 'k8s',
            class: 'bar-k8s',
          },
        ],
      },
      skill2: [
        {
          label: 'HTML5, CSS3 & Javascript',
          logo: 'html_css_js',
          class: 'bar-js',
        },
        {
          label: 'Sass',
          logo: 'sass',
          class: 'bar-sass',
        },
        {
          label: 'NodeJS',
          logo: 'nodejs',
          class: 'bar-node',
        },
        {
          label: 'Typescript',
          logo: 'typescript',
          class: 'bar-typescript',
        },
        {
          label: 'Vue',
          logo: 'vue',
          class: 'bar-vue',
        },
        {
          label: 'React',
          logo: 'react',
          class: 'bar-react',
        },
        {
          label: 'Tailwind',
          logo: 'tailwind',
          class: 'bar-tailwind',
        },
        {
          label: 'MySQL',
          logo: 'mysql',
          class: 'bar-mysql',
        },
        {
          label: 'MongoDB',
          logo: 'mongo',
          class: 'bar-mongo',
        },
        {
          label: 'Git',
          logo: 'git',
          class: 'bar-git',
        },
      ],
    }
  },
  methods: {
    mapSkillText(text) {
      const textMapper = {
        programmingLanguage: 'Programming Language',
        frameworks: 'Frameworks & Libraries',
        database: 'Database',
        tools: 'Tools',
      }

      return textMapper[text] || ''
    },
  },
}
</script>

<style lang="scss"></style>
