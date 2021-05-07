<template>
  <section class="home">
    <p class="home-p">
      Nice to see you here! My name is Volodymyr Ishchenko. I'm a front-end developer, UI/UX designer (no joke). Love
      JavaScript, NodeJs, and Vue. Programming for fun and living.
    </p>
    <p class="home-p">
      This page is just a placeholder.
    </p>

    <p class="home-p">But if you here for a reason - you can check out more about my dev story:</p>

    <router-link class="home-dev-story-btn" active-class="active" to="/dev-story">
      Dev Story
    </router-link>

    <links />
  </section>
</template>

<script>
import Links from '@/components/links'

export default {
  name: 'home',
  components: { Links },
}
</script>

<style lang="scss" scoped>
.home {
  margin: 2em 0;

  &-p {
    margin-bottom: 1rem;
  }

  &-dev-story-btn {
    display: block;
    background: black;
    color: white;
    width: max-content;
    padding: 1em 2.5em;
    border-radius: 8px;
    margin: 2em 0;
    text-decoration: none;
  }
}
</style>
