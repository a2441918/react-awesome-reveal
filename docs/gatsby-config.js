module.exports = {
  siteMetadata: {
    title: `React Awesome Reveal`,
    description: `Playground to showcase React Awesome Reveal effects and features.`,
    githubUrl: `https://github.com/dennismorello/react-awesome-reveal`,
    siteUrl: `https://react-awesome-reveal.morello.dev`,
    year: 2019,
    author: {
      name: `Dennis Morello`,
      twitter: `@dennismorello`,
      website: `https://morello.dev`,
    },
  },
  pathPrefix: `/docs`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-chakra-ui`,
      options: {
        isResettingCSS: true,
        isUsingColorMode: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: process.env.GTM_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `React Awesome Reveal`,
        short_name: `Reveal`,
        start_url: `docs/`,
        background_color: `#1A202C`,
        theme_color: `#1A202C`,
        display: `standalone`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    /*{
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          modifyURLPrefix: {
            "/": `docs/`,
          },
        },
      },
    },*/
  ],
}
