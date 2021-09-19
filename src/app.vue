<template>
  <div class="layout">
    <div class="layout_h">
      <hi class="layout_h-hi" />
    </div>
    <div class="layout-page">
      <router-view />
    </div>

    <div class="layout_ref">
      <a href="https://www.digitalocean.com/?refcode=72cfd6567301&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"><img
          src="https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%202.svg"
          alt="DigitalOcean Referral Badge" /></a>
    </div>
  </div>
</template>

<script>
import Hi    from '@/components/hi'
import Links from '@/components/links'

export default {
  components: { Hi, Links },
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

  &-page {
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
}
</style>
