<template>
  <section class="story">

    <p class="story-main">
      Overall experience: 10+ years. Recently focused on the Frontend, Vue nad JavaScript in general. Have experience with
      cross-country teams on different types of projects: Advertisement, E-Commerce, Automotive, B2B, SaaS, even Indie-Games.
    </p>

    <p class="story-main">
      Friendly, honest, love my job, care about my project and users no matter what.❤️
    </p>

    <h2>Frontend Experience</h2>

    <ul class="story-list">
      <li>Prototyping UI/UX for all-sized projects</li>
      <li>Design System and UI-kit development</li>
      <li>Projects with multiple desgin</li>
      <li>Hi-performance Web interfaces on all kinds of projects</li>
      <li>Cross-platform Desktop applications</li>
      <li>Mobile-first & Mobile-friendly</li>
      <li>Mentoring, Code-review, and all the good development processes</li>
    </ul>

    <h3>Recent Stack</h3>

    <ul class="story-list">
      <li>JavaScript</li>
      <li>VueJS, Vuex</li>
      <li>Unit Testing</li>
      <li>Electron</li>
      <li>WebSocket</li>
      <li>UI/UX (HTML, CSS/SCSS, Animations)</li>
      <li>Figma, Sketch, Photoshop</li>
    </ul>

    <h2>Backend Experience</h2>

    <ul class="story-list">
      <li>Scalable Run-time applications</li>
      <li>Web Applications for RT social interactions</li>
      <li>In-House E-Commerce Applications</li>
    </ul>

    <h3>Recent Stack</h3>

    <ul class="story-list">
      <li>NodeJS</li>
      <li>MongoDB</li>
      <li>Fastify</li>
      <li>Express</li>
      <li>Mongoose</li>
      <li>WebSocket</li>
    </ul>


    <h2>Jobs</h2>
    <ul class="story-jobs">
      <li>
        <b>Sr. Frontend Developer, UI/UX</b>
        at Cardeal.ge
        <small>Mar 2019 → Current</small>
        <p class="story-jobs-desc">
          The most beautiful website ever, large dashboard, whole bunch of microservices and complex business logic, UI-Kit
          development, Design system integration, VueJS 2 and 3, Unit Testing and many more.
        </p>
      </li>
      <li>
        <b>UI/UX, Front-end Developer</b>
        at Exponential Interactive inc.
        <small>Sep 2013 → Mar 2019</small>
        <p class="story-jobs-desc">
          Angular, Vue, JQuery, Design, all kinds of reverse-engineering, UX prototyping, several multimedia projects, animated
          interactive Ad.
        </p>
      </li>
      <li>
        <b>Freelance Time!</b>
        at Home
        <small>May 2012 → Sep 2013</small>
        <p class="story-jobs-desc">
          Design, UX prototyping, Full-stack time, PHP/SMARTY/MYSQL, Linux, Mobile App Constructor, WebGL, ThreeJS.
        </p>
      </li>
      <li>
        <b>UI/UX & PHP Developer</b>
        at QArea
        <small>Mar 2010 → May 2012</small>
      </li>
      <li>
        <b>PHP Developer</b>
        at AlarSoft
        <small>Feb 2008 → Mar 2010</small>
      </li>
    </ul>

    <h2>Accidental Experience</h2>
    <ul class="story-list">
      <li>Multiplayer Games prototyping</li>
      <li><a href="https://www.youtube.com/watch?v=-xoxKqmILuI" target="_blank">Overlay app</a> for Elite Dangerous (twice)</li>
      <li>Several <a href="https://github.com/vovchisko" target="_blank">open-source projects</a> & npm packages</li>
      <li>Experience with ThreeJS <a href="http://master.oringo.com.ua/en/" target="_blank">a little</a></li>
      <li>HTML-based multiplayer <a href="https://www.youtube.com/watch?v=mLrntKVJyTk&" target="_blank">game prototype</a></li>
      <li>IE6-friendly web (yes, I'm old)</li>
      <li>I can <a href="https://www.artstation.com/vovchisko" target="_blank">draw</a> when it's necessary.</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'dev-story',
}
</script>

<style lang="scss" scoped>
.story {
  margin: 2em 0;

  &-main {
    font-size: 18px;
    margin: 1em 0;
  }

  h2 {
    margin-top: 2em;
  }

  h3 {
    &::after {
      content: ":"
    }
  }

  ul {
    margin: 1em 0;
    padding: 0;
    li {
      margin-left: 1em;
      margin-bottom: 0.15em;
    }
  }

  &-list {
    & li {
      &::after {
        content: ";"
      }
      &:last-child::after {
        content: "."
      }
    }
  }

  &-jobs {
    &-desc {
      margin: 0.75em 0 1em 0;
      color: #555;
    }

    & li {
      margin: 0.5em 0 2em 0;

      & small {
        display: block;
        color: #888888;
      }
    }
  }

  &-note {
    &:before {
      content: '*';
      color: orange;
      display: block;
    }

    color: grey;
    display: block;
  }

  a {
    color: #0085d5;
  }
}
</style>
