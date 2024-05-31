<template>
  <div class="layout">
    <router-link
        :to="{ name: ROUTE_NAMES.DONATE }"
        class="layout_hero print_hide" style=""
    >
      <h1 style="font-size: 24px;">Russian warship, go fuck yourself!
        <svg class="layout_h-flag" width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 0H0V20H30V0Z" fill="#0057B7" />
          <path d="M30 10H0V20H30V10Z" fill="#FFD700" />
        </svg>
      </h1>
    </router-link>
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
import Hi              from '@/components/hi.vue'
import Links           from '@/components/links.vue'
import { config }      from './config.js'
import { ROUTE_NAMES } from '@/route-names.js'

export default {
  components: { Hi, Links },
  setup () {

    return { config, ROUTE_NAMES }
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

  &_hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    margin-bottom: 6em;
    background-color: black;
    color: white;
    padding: 3em 4em;

    &:hover {
      text-decoration: underline;
      background: #130101;
      box-shadow: 0 18px 13px -5px rgba(0, 0, 0, .3);
    }

    &-hi {
      margin: auto 0;
    }

    &-flag {
      border-radius: 3px;
    }
  }

  &_h {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-hi {
      margin: auto 0;
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
  --pal-link: #0072e4;
  --pal-link-hover: #0072e4;
}

body {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #fff;
  font-size: 16px;
  line-height: 1.7em;
  color: #000;
  overflow-y: scroll;
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


a {
  color: var(--pal-link);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:focus, &:active {
    color: var(--pal-link-active);
    text-decoration: underline;
  }
}


a {
  color: var(--pal-link);

  &:active {
    color: var(--pal-link-active);
  }

  &:focus, &:hover {
    color: var(--pal-link-hover);
    text-decoration: underline;
  }
}

hr {
  border-width: 1px 0 0 0;
  border-style: solid;
  border-color: #eee;
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
