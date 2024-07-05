<template>
  <div class="donate">
    <p>
      Drones need care and feeding. They need to be charged, maintained, and repaired. They need to be flown and tested. They
      need to be programmed and debugged. They need to be built and upgraded.
    </p>

    <img class="donate_img" src="/drone-nest.jpg" alt="" width="640" height="287" />

    <p>
      I'm helping to organize a Drone Workshop in Ukraine.
      We are building, programming, and repairing all kinds of drones for the Armed Forces of Ukraine.
      Usually, I finance everything on my own, but expenses are hard to predict and don't always fit my budget.
      So I run small fundraisers from time to time.
    </p>
    <p>
      By contributing to our Drone Workshop, you directly support the brave men and women of the Armed Forces of Ukraine.
      This is the quickest way to directly contribute to the guidance of Russian warships.
    </p>

    <hr />

    <p><b>PayPal</b> <br />
      ✉️ <code><a href="mailto:hi@vovchisko.dev">hi@vovchisko.dev</a></code><br />
      <small>Please, <b>do not</b> mention purposes in the payment description that might violate PP ToS.<br />
        Be neutral and informative.😉</small>
    </p>

    <p>
      <b>Monobank</b><br />
      🍯 <a href="https://send.monobank.ua/jar/3dJpjWgxea" target="_blank">https://send.monobank.ua/jar/3dJpjWgxea</a> <br />
      💳 <code>5375411209797328</code> <br />
    </p>

    <p>
      <b>Privat Bank</b><br />
      🍯 <a href="https://privat24.ua/send/1zyy7" target="_blank">https://privat24.ua/send/1zyy7</a><br />
      💳 <code>5168752103382928</code>
    </p>

    <hr />

    <p>
      If you have any questions, or want to see how your money is spent, feel free to contact me or catch me
      on <a href="https://x.com/vovchisko" target="_blank">Twitter for updates</a>. 🐦
    </p>

    Glory to Ukraine! ❤️🔥🇺🇦

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
