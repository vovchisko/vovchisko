<template>
  <div class="layout">
    <div class="layout-hi">
      <hi />
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
