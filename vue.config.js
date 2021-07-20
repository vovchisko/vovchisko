module.exports = {
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        sourceMap: true,
        prependData: `
          @import '@/global.scss';
        `,
      },
    },
  },
}
