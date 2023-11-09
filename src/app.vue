<template>
  <div class="layout">
    <div class="layout_h" style="margin-bottom: 6em; background-color: black; color: white; padding: 3em 4em">
      <h1 style="font-size: 24px;">Russian warship, go fuck yourself! 🇺🇦</h1>
    </div>
    <div class="layout_h">
      <hi class="layout_h-hi" />
    </div>
    <div class="layout_page">
      <router-view />
    </div>

    <div class="layout_ref">
      <a href="https://www.digitalocean.com/?refcode=72cfd6567301&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge">
        <img alt="DigitalOcean Referral Badge" src="~@/assets/do-button.svg" />
      </a>
    </div>

    <small class="layout_ver">v{{ config.PACKAGE_VERSION }}</small>
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
  margin: 64px auto;

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
