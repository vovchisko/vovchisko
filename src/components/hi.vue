<template>
  <header class="hi">
    <div>
      <router-link :to="{ name : ROUTE_NAMES.HOME } " class="hi_logo">
        <div class="hi_logo-circle">
          <img alt="vovchisko's bunny" src="../assets/bunny.gif" class="hi_logo-img print_hide" />
        </div>
        <p v-if="route.name !== ROUTE_NAMES.HOME" class="print_hide hi_logo-arrow">←</p>
      </router-link>
    </div>
    <div class="hi_head">
      <h1 class="hi_head-title">{{ meta_title }}</h1>
    </div>

  </header>
</template>

<script>
import { computed }    from 'vue'
import { useRoute }    from 'vue-router'
import { ROUTE_NAMES } from '@/route-names.js'

export default {
  name: 'hi',
  setup () {
    const route = useRoute()
    const meta_title = computed(() => route.meta.title || 'Oh, hi!')

    return { meta_title, route, ROUTE_NAMES }
  },
}
</script>

<style lang="scss" scoped>
.hi {
  display: flex;
  align-items: flex-start;

  &_logo {
    text-decoration: none;
    position: relative;

    &-circle {
      background-color: var(--pal-green);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--logo-size);
      height: var(--logo-size);
      width: var(--logo-size);
      min-height: var(--logo-size);
      min-width: var(--logo-size);
    }

    &-img {
      image-rendering: pixelated;
      height: 50%;
    }

    &-arrow {
      position: absolute;
      top: 100%;
      width: 100%;
      transition: all linear 180ms;
      font-size: 32px;
      text-align: center;
      color: #c7c7c7;
      line-height: 2.6em;
    }

    &:hover &-arrow {
      transform: translateX(-5px);
      color: black;
    }
  }

  &_head {
    margin: 0 0 0 var(--base-spacing);
    flex: 1;
    align-items: center;

    &-title {
      font-weight: bold;
      display: inline-block;
      font-size: 1.6em;
      line-height: var(--logo-size);
      margin: 0;
      padding: 0;
    }
  }
}
</style>
