<template>
  <section class="links">
    <h4 class="links-title">You can find me here:</h4>
    <a
        v-for="l in links"
        :key="l.resource"
        :href="l.link" target="_blank"
        class="links-item"
    >
      <span>{{ l.res }}</span> as <b>{{ l.nick }}</b>
    </a>
  </section>
</template>

<script>
export default {
  name: 'links',
  computed: {
    links () {
      return [
        { res: 'GitHub', nick: '/vovchisko', link: 'https://github.com/vovchisko' },
        {
          res: 'Stackoverflow',
          nick: 'Volodymyr Ishchenko',
          link: 'https://stackoverflow.com/users/533976/vladimir-ishenko?tab=topactivity',
        },
        { res: 'NPM', nick: '~vovchisko', link: 'https://www.npmjs.com/~vovchisko' },
        { res: 'Twitter', nick: '@vovchisko', link: 'https://twitter.com/vovchisko' },
        { res: 'Instagram', nick: '@vovchisko.dev', link: 'https://www.instagram.com/vovchisko.dev/' },
        { res: 'ArtStation', nick: '@vovchisko', link: 'https://www.artstation.com/vovchisko' },
      ]
    },
  },
}
</script>

<style scoped lang="scss">
.links {
  &-title {
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 6em;
    margin-bottom: 1.5em;
  }

  &-item {
    margin: 0.1em -2px;
    text-decoration: none;
    color: #666;
    display: block;
    width: max-content;

    & span {
      color: #0085d5;
    }

    & b {
      font-weight: normal;
      padding: 1px 3px;
      display: inline-block;
    }

    &:hover {
      color: black;

      & span {
        text-decoration: underline;
      }

      & b {
        font-weight: normal;
        color: #ffffff;
        background: var(--pal-green);
      }
    }
  }
}
</style>
