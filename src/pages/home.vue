<template>
  <section class="home">
    <p class="home-p">
      Nice to see you here! My name is Volodymyr Ishchenko. I'm a front-end developer, UI/UX designer from Ukraine. Love
      JavaScript, NodeJs, and Vue. Programming for fun and living.
    </p>

    <router-link class="home-dev-story-btn" active-class="active" to="/dev-story">
      Curriculum Vitae
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
    background: #333;
    color: #eee;
    width: max-content;
    padding: 1em 2.5em;
    border-radius: 8px;
    margin: 2em 0;
    text-decoration: none;
    transition: all ease-in-out 180ms;
    box-shadow: 0 4px 14px -9px rgba(0, 0, 0, .3);

    &:hover {
      background: #000;
      color: white;
      box-shadow: 0 18px 13px -5px rgba(0, 0, 0, .3);
    }

    &:active {
      background: #000;
      transform: translateY(1px);
      color: white;
      box-shadow: 0 18px 13px -5px rgba(0, 0, 0, .3);
    }
  }
}
</style>
