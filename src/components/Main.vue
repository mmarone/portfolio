<template>
    <div class="home">
        <home/>
        <experience/>
        <skill/>
        <about/>
    </div>
</template>

<script>
import Home from './Home.vue';
import Experience from './Experience.vue';
import Skill from './Skill.vue';
import About from './About.vue';
export default {
    components: {
        Home,
        Experience,
        Skill,
        About
    }
}
</script>

<style lang="scss" scoped>

</style>


