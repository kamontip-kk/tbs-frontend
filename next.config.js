// const withSass = require('@zeit/next-sass');
// module.exports = withSass({
//     exportTrailingSlash: true,
//     trailingSlash: true,
//     compress: true,
//     plugins: [],
// });


module.exports = {
    reactStrictMode: true,
    trailingSlash: true,
    compress: true,
    plugins: [],
    i18n:{
      react: { useSuspense: false },
      browserLanguageDetection: false,
      serverLanguageDetection: false,
      localeDetection: false,
      locales: ['en', 'th'],
      defaultLocale: 'th',
      keySeparator: '::',
      nsSeparator: ':::',
      // domains: [
      //   {
      //     domain: 'localhost3000',
      //     defaultLocale: 'th',
      //   },
      //   {
      //     domain: 'localhost3000',
      //     defaultLocale: 'en'
      //   },
      // ]
    },
    images: {
      domains: ["assets.thaibulksms.com"],
    },
  };
  