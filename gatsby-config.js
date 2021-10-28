/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`,
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Website`,
      short_name: `website`,
      start_url: `/`,
      background_color: `#000000`,
      theme_color: `#ffffff`,
      display: `standalone`,
      icon: `src/images/favicon.png`,
    }
  }
],
siteMetadata: {
  title: "Website",
  description:
    "Portfolio cum personal blog",
  twitterUsername: "@amalkrishna_",
}
}
