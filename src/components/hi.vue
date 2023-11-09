<template>
  <header class="hi">
    <div>
      <router-link class="hi_logo" to="/">
        <img alt="vovchisko's bunny" src="../assets/bunny.gif" class="print_hide" />
      </router-link>
    </div>
    <div class="hi_head">
      <h1 class="hi_head-title">{{ meta_title }}</h1>

      <p class="hi_link _print">Home: <a href="https://vovchisko.dev">https://vovchisko.dev</a></p>
      <p class="hi_link">Email: <a href="mailto:hi@vovchisko.dev">hi@vovchisko.dev</a></p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'hi',
  computed: {
    meta_title () {
      return this.$route.meta.title || 'Oh, hi!'
    },
  },
}
</script>

<style lang="scss" scoped>
.hi {
  display: flex;
  align-items: flex-start;

  &_link {
    &._print {
      display: none;

      @media print {
        display: block;
      }
    }

    & a {
      color: #0085d5 !important;
    }


  }

  &_logo {
    background-color: var(--pal-green);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--logo-size);
    height: var(--logo-size);
    width: var(--logo-size);
    min-height: var(--logo-size);
    min-width: var(--logo-size);

    & img {
      image-rendering: pixelated;
      height: 50%;
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
