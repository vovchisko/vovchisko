<template>
  <div class="layout">
    <div class="layout_h print_hide" style="margin-bottom: 6em; background-color: black; color: white; padding: 3em 4em">
      <h1 style="font-size: 24px;">Russian warship, go fuck yourself!

        <svg class="layout_h-flag" width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 0H0V20H30V0Z" fill="#0057B7" />
          <path d="M30 10H0V20H30V10Z" fill="#FFD700" />
        </svg>
      </h1>
    </div>
    <div class="layout_h">
      <hi class="layout_h-hi" />
    </div>
    <div class="layout_page">
      <router-view />
    </div>

    <div class="layout_ref print_hide">
      <a href="https://www.digitalocean.com/?refcode=72cfd6567301&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge">
        <img alt="DigitalOcean Referral Badge" src="~@/assets/do-button.svg" />
      </a>
    </div>

    <small class="layout_ver print_hide">v{{ config.PACKAGE_VERSION }}</small>
  </div>
</template>

<script>
import Hi         from '@/components/hi.vue'
import Links      from '@/components/links.vue'
import { config } from './config.js'

export default {
  components: { Hi, Links },
  setup () {

    return { config }
  },
}
</script>

<style lang="scss" scoped>
.layout {
  width: 640px;
  max-width: calc(100vw - var(--base-spacing) * 3);
  margin: 32px auto;

  @media print {
    margin: 0 auto;
  }

  &_h {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-hi {
      margin: auto 0;
    }

    &-flag {
      border-radius: 3px;
    }
  }

  &_page {
    padding-left: var(--left-offset);
  }

  &_ref {
    margin: 48px 0;
    padding-left: var(--left-offset);

    & img {
      border-radius: 3px;
      border: 1px solid #eee;
      width: 150px;
      height: 49px;
    }
  }

  &_ver {
    color: #c7c7c7;
  }
}
</style>

<style lang="scss">
:root {
  --logo-size: 48px;
  --base-spacing: 14px;
  --left-offset: calc(var(--base-spacing) + var(--logo-size));
  --pal-green: #46862a;
}

body {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #fff;
  font-size: 14px;
  line-height: 1.7em;
  color: #000;
}

section {
  display: block;
}

nav, header, section, div, p, h1, h2, h3, h4, h5 {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.spoiler {
  background-color: black;
  color: black;

  &:hover {
    background-color: #eee;
  }
}

@media print {
  .print {
    &_break {
      page-break-before: always;
    }

    &_hide {
      display: none !important;
    }
  }

  body {
    font-size: 80%;
    margin: 0; // Remove default margins
    padding: 1cm; // Add padding to the printed page
  }
}

</style>
