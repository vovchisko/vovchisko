<template>
  <section class="links">
    <h4 class="links-title">🔗 All the links</h4>
    <a
        v-for="l in links"
        :key="l.resource"
        :href="l.link" class="links-item"
        target="_blank"
    >
      <span>{{ l.res }}</span> <b>{{ l.tip }}</b>
    </a>
  </section>
</template>

<script>
export default {
  name: 'links',
  computed: {
    links () {
      return [
        { res: 'GitHub', link: 'https://github.com/vovchisko', tip: '🔬 Obviously' },
        { res: 'Discord', link: 'https://discord.gg/cYuWt5eDrF', tip: '🍕 Basically my kitchen' },
        { res: 'Stackoverflow', link: 'https://stackoverflow.com/users/533976', tip: `🥃 We've all been there` },
        { res: 'NPM', link: 'https://www.npmjs.com/~vovchisko', tip: `📦 Maintain all the packages` },
        { res: 'Twitter', link: 'https://twitter.com/vovchisko', tip: `💩 Social time` },
        { res: 'Instagram', link: 'https://www.instagram.com/vovchisko.dev/', tip: '📷 #sky #outdoor' },
        { res: 'Dribbble', link: 'https://dribbble.com/vovchisko', tip: `✨ For real` },
        { res: 'ArtStation', link: 'https://www.artstation.com/vovchisko', tip: `🎨 Happy little accident` },
        { res: 'LinkedIn', link: 'https://www.linkedin.com/in/vovchisko/', tip: `🎯 Hunt time` },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
.links {
  &-title {
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 6em;
    margin-bottom: 1.5em;
  }

  &-item {
    margin: 0.1em 0;
    text-decoration: none;
    color: #666;
    display: block;
    width: max-content;

    & span {
      color: #0085d5;
    }

    & b {
      font-weight: normal;
      transition: all ease-in-out 180ms;
      color: #88a;
      opacity: 0;
      display: inline-block;
      transform: translateX(1em);
      margin-left: 8px;
    }

    @include respond-below(sm) {
      margin: 12px 0;
      width: auto;
      & b {
        display: block;
        font-size: 12px;
        opacity: 1;
        transform: none;
        line-height: 14px;
      }

      & span {
        font-size: 16px;
        margin-top: 8px;
        display: block;
      }
    }

    &:hover {
      color: black;

      & span {
        text-decoration: underline;
      }

      & b {
        opacity: 1;
        transform: translateX(0em);
      }
    }
  }
}
</style>
