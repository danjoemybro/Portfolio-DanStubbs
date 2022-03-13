/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: `new`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    `gatsby-plugin-postcss`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyAW_dQEsnt0R3OSfzTKDGnjtEMWrvQmy6k",
          authDomain: "mac-comparison.firebaseapp.com",
          projectId: "mac-comparison",
          storageBucket: "mac-comparison.appspot.com",
          messagingSenderId: "123745312698",
          appId: "1:123745312698:web:db27575c2ac1d407a78783",
        },
      },
    },
  ],
};
