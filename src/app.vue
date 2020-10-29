<template>
  <div class="app">
    <div class="hi">
      <div class="hi-logo">
        <img alt="vovchisko's bunny" src="./assets/bunny.gif"/>
      </div>
      <h1 class="hi-title">Oh, hi!</h1>
    </div>
    <section>
      <p>
        Nice to see you here! My name is Volodymyr Ishchenko. I'm a front-end developer, UI/UX designer (no joke). Love
        JavaScript, NodeJs, and Vue. Programming for fun and living.
      </p>
      <p>
        This page is just a placeholder.
      </p>
    </section>


    <section class="links">
      <h4 class="links-title">You can find me here:</h4>

      <div v-for="l in links"
           :key="l.resource"
           class="links-item"
      >
        <a :href="l.link" target="_blank">
          <span>{{ l.res }}</span> as <b>{{ l.nick }}</b>
        </a>
      </div>
    </section>
    <section>
      <p class="todo">// todo: make this page looks pretty</p>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'App',
    computed: {
      links() {
        return [
          {res: 'GitHub', nick: '/vovchisko', link: 'https://github.com/vovchisko'},
          {
            res: 'Stackoverflow',
            nick: 'Volodymyr Ishchenko',
            link: 'https://stackoverflow.com/users/533976/vladimir-ishenko?tab=topactivity'
          },
          {res: 'NPM', nick: '~vovchisko', link: 'https://www.npmjs.com/~vovchisko'},
          {res: 'Twitter', nick: '@vovchisko', link: 'https://twitter.com/vovchisko'},
          {res: 'Instagram', nick: '@vovchisko.dev', link: 'https://www.instagram.com/vovchisko.dev/'},
          {res: 'ArtStation', nick: '@vovchisko', link: 'https://www.artstation.com/vovchisko'},
        ]
      },
    },
  }
</script>
<style lang="scss">
  .app {

    width: 640px;
    max-width: 90vw;
    margin: 64px auto;
  }

  .hi {
    display: flex;
    align-items: center;

    &-title {
      font-weight: bold;
      display: inline-block;
      margin: 0 0 0 1em;
    }

    &-logo {
      background-color: #3b6728;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 45px;
      height: 72px;
      width: 72px;
      min-height: 72px;
      min-width: 72px;

      & img {
        image-rendering: pixelated;
        height: 50%;
      }
    }
  }

  section {
    display: block;
    margin: 2em 0 0 72px;
    padding-left: 2em;

    & p {
      font-size: 13px;
    }

  }

  .links {
    &-title {
      text-transform: uppercase;
      font-weight: bold;
      margin-top: 6em;
    }

    &-item {
      display: block;

      & a {
        margin: 0.5em 0;
        text-decoration: none;
        font-size: 12px;
        color: #888;

        & span {
          color: #0085d5;
        }

        & b {
          font-weight: normal;
        }
      }
    }
  }

  .todo {
    font-family: "Lucida Console", Monaco, monospace;
    font-size: 13px;
    margin-top: 5em;
  }
</style>