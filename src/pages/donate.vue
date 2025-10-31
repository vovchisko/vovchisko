<template>
  <div class="donate">
    <p>
      Thank you for supporting my country's fight for freedom and democracy.
      Your help made a real difference when it was needed most.
    </p>

    <img class="donate_img" src="/drone-nest.jpg" alt="" width="640" height="287" />

    <p>
      Things get slightly better - I no longer need to publicly fundraise, which is good.
      However, the war won't end tomorrow, and support is still critical.
      If you want to help, I recommend these organizations:
    </p>

    <hr />

    <p>
      <b>Come Back Alive</b><br />
      <a href="https://savelife.in.ua/" target="_blank">https://savelife.in.ua/</a><br />
      <small>Non-profit organization providing almost anything and everything to Ukrainian military - from socks to heavy artillery.</small>
    </p>

    <p>
      <b>Sternenko Fund</b><br />
      <a href="https://www.sternenkofund.org/" target="_blank">https://www.sternenkofund.org/</a><br />
      <small>The fastest way to convert your help into kinetic energy. Sternenko Fund delivers strike and airdefense drones to the armed forces.</small>
    </p>

    <p>
      <b>Brave1</b><br />
      <a href="https://brave1.gov.ua/" target="_blank">https://brave1.gov.ua/</a><br />
      <small>For investors. Ukrainian defense tech cluster supporting innovation in military technology. it is basically a silicon valley of the military drone technoilogies.</small>
    </p>

    <hr />

    <p style="display: inline-flex; align-items: center; gap: 2px">
      Glory to Ukraine! ❤️🔥
      <svg class="layout_h-flag" width="24" height="16" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 0H0V20H30V0Z" fill="#0057B7" />
        <path d="M30 10H0V20H30V10Z" fill="#FFD700" />
      </svg>
    </p>


  </div>
</template>

<script>

export default {
  name: 'Donate',
  setup () {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.donate {
  margin: 2em 0;

  &_img {
    margin-left: calc(var(--left-offset) * -1);
    max-width: calc(100vw - var(--left-offset) + 32px);
    object-fit: cover;
  }

  & p {
    margin: 1em 0;

    & small {
      display: block;
      line-height: 1.2;
      color: #888;
    }
  }

  iframe {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  .loaded {
    opacity: 1;
  }

  @media print {
    margin: 0;
  }
}
</style>
