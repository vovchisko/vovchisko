<template>
  <section class="cv">

    <p class="cv-main">
      15+ years of experience. Recently focused on JavaScript and Frontend. Primarily Vue and NodeJS. Have experience with
      cross-country teams on different types of projects: IoT, Automation, Visual Programming, E-Commerce, Automotive, B2B,
      Advertisement, SaaS, and even Indie-Game dev.
    </p>

    <p class="cv-main">
      I am friendly and honest, love my work, and care about my projects and users. ❤️
    </p>

    <p class="cv-main print_hide">
      Stress-resistance: <span class="spoiler">Ukrainian</span>.
    </p>

    <div>
      <p class="cv_link _print">Home: <a href="https://vovchisko.dev">https://vovchisko.dev</a></p>
      <p class="cv_link">Email: <a href="mailto:hi@vovchisko.dev">hi@vovchisko.dev</a></p>
    </div>


    <h2>Experience / Frontend</h2>

    <ul class="cv-list">
      <li>60 FPS Web UI with large data-sets</li>
      <li>Cloud/Edge/Offline Web Applications</li>
      <li>Design System and UI-kit development</li>
      <li>Cross-platform Desktop, Mobile-first, and Mobile-friendly apps</li>
      <li>Mentoring, Code-review, and all the good development processes</li>
      <li>UX & Design, Figma, Sketch, Photoshop, FontForge</li>
    </ul>

    <h3>Stack</h3>

    <ul class="cv-list">
      <li>JavaScript, VueJS, Composition API</li>
      <li>WebSocket, RT-applications, WAMP, WS-RPC</li>
      <li>UI/UX (HTML, CSS/SCSS, Animations)</li>
      <li>Electron Cross-platform Desktop Apps</li>
    </ul>

    <h2>Experience / Backend</h2>

    <ul class="cv-list">
      <li>IoT Automation system</li>
      <li>Web Applications for RT social interactions</li>
      <li>In-House E-Commerce Applications</li>
      <li>Simple multiplayer games</li>
      <li>Data-driven prompt engineering + OpenAI Vision</li>
    </ul>

    <h3>Stack</h3>

    <ul class="cv-list">
      <li>NodeJS</li>
      <li>MongoDB</li>
      <li>Fastify, Express</li>
      <li>WebSocket, WAMP</li>
    </ul>

    <div class="print_break"></div>

    <h2>Jobs</h2>
    <ul class="cv-jobs">
      <li>
        <b>Full-Stack Developer, UI/UX, IoT Automation</b> at Simple Things
        <small>Jul 2021 → Jan 2024</small>
        <p class="cv-jobs-desc">
          IoT and Automation, Visual Programming, 60 FPS UI, UI-Kit and Design system integration, Video Surveillance Client,
          and many more super cool features.
        </p>
      </li>
      <li>
        <b>Sr. Frontend Developer, UI/UX</b> at Cardeal.ge
        <small>Mar 2019 → Jul 2021</small>
        <p class="cv-jobs-desc">
          The most beautiful website ever, large dashboard, a whole bunch of microservices and complex business logic, UI-Kit
          development, Design system integration, VueJS 2 and 3, Unit Testing, and many more.
        </p>
      </li>
      <li>
        <b>UI/UX, Front-end Developer</b> at Exponential Interactive Inc.
        <small>Sep 2013 → Mar 2019</small>
        <p class="cv-jobs-desc">
          Angular, Vue, JQuery, Design, all kinds of reverse-engineering, UX prototyping, several multimedia projects, animated
          interactive Ad.
        </p>
      </li>
      <li>
        <b>Freelance Time!</b> at Home
        <small>May 2012 → Sep 2013</small>
        <p class="cv-jobs-desc">
          Design, UX prototyping, Full-stack development, PHP/SMARTY/MYSQL, Linux, Mobile App Constructor, WebGL, ThreeJS.
        </p>
      </li>
      <li>
        <b>UI/UX & PHP Developer</b> at QArea
        <small>Mar 2010 → May 2012</small>
      </li>
      <li>
        <b>PHP Developer</b> at AlarSoft
        <small>Feb 2008 → Mar 2010</small>
      </li>
    </ul>

    <h2>Accidental Experience</h2>
    <ul class="cv-list">
      <li class="spoiler">I guess I'm prompt engineer now. Or even Prompt Chef Architect</li>
      <li>Multiplayer Games prototyping</li>
      <li><a href="https://www.youtube.com/watch?v=-xoxKqmILuI" target="_blank">Overlay app</a> for Elite Dangerous (twice)</li>
      <li>Several <a href="https://github.com/vovchisko" target="_blank">open-source projects</a> &
        <a href="https://www.npmjs.com/~vovchisko" target="_blank">npm packages</a></li>
      <li>Experience with ThreeJS a little</li>
      <li>HTML-based multiplayer
        <a href="https://www.youtube.com/watch?v=mLrntKVJyTk" target="_blank">game prototype</a>
        (technical implementation is fun)
      </li>
      <li>I can <a href="https://www.artstation.com/vovchisko" target="_blank">draw</a> when it's
        <a href="https://dribbble.com/vovchisko" target="_blank">necessary</a></li>
      <li>IE6-friendly web (yes, I'm old)</li>
    </ul>

    <h2>Important Conclusions</h2>
    <ul class="cv-list">
      <li>AI will never take my job</li>
      <li>All front-end frameworks are the same. The best one are delivers less breaking changes, doing the same job</li>
      <li>Turns out the slogan "do not re-invent the bicycle" could be misleading</li>
      <li>Turns out "best practices" are not necessarily "the best"</li>
      <li>Turns out there are still places where you actually have to invent something</li>
    </ul>
  </section>

</template>

<script>
export default {
  name: 'cv',
}
</script>

<style lang="scss" scoped>
.cv {
  margin: 2em 0;

  @media print {
    margin: 0;
  }

  &_link {
    &._print {
      display: none;

      @media print {
        display: block;
      }
    }
  }

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
}
</style>
