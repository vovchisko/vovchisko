<template>
  <div class="layout">
    <div class="layout_h">
      <hi class="layout_h-hi" />

      <div class="layout_h-ref">
        <a href="https://www.digitalocean.com/?refcode=72cfd6567301&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge">
          <img
              src="https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%202.svg"
              alt="DigitalOcean Referral Badge"
          />
        </a>
      </div>
    </div>
    <div class="layout-page">
      <router-view />
    </div>

    <section class="layout-todo">
      // todo: make this page looks pretty
    </section>
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
    &-ref {
      margin: auto 0;
      @include respond-below(sm) {
        & img {
          max-width: 40vw;
        }
      }
    }
  }

  &-page {
    padding-left: var(--left-offset);
  }

  &-todo {
    padding-left: var(--left-offset);
    font-family: "Lucida Console", Monaco, monospace;
    margin-top: 5em;
    color: #888888;
  }
}
</style>
