<template>
  <section class="home">
    <p class="home-p">
      Nice to see you here! My name is Volodymyr Ishchenko. I'm a Full-stack developer developer, UI/UX designer from Ukraine.
      Love
      JavaScript, NodeJs, and Vue. Programming for fun and living.
    </p>

    <router-link active-class="active" class="home-cv-btn" :to="{ name: ROUTE_NAMES.CV }">
      Curriculum Vitae
    </router-link>

    <links />
  </section>
</template>

<script>
import Links           from '@/components/links.vue'
import { ROUTE_NAMES } from '@/route-names.js'

export default {
  name: 'home',
  components: { Links },
  setup () {
    return { ROUTE_NAMES }
  },
}
</script>

<style lang="scss" scoped>
.home {
  margin: 2em 0;

  &-p {
    margin-bottom: 1rem;
    font-size: 18px;
  }

  &-cv-btn {
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
