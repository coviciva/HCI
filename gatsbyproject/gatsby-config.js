module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    MenuItems: [
      {
        text: "Naslovnica",
        link: "/",
      },
      {
        text: "Raspored",
        link: "/raspored",
      },
      {
        text: "Rezultati",
        link: "/rezultati",
      },
      {
        text: "Blog",
        link: "/blog",
      },
      {
        text: "O nama",
        link: "/about",
      },
    ],
    LinkItems: [
      {
        link: "http://www.pekarababic.hr/",
      },
      {
        link: "https://www.fanta.com/",
      },
      {
        link: "https://mallofsplit.hr/",
      },
      {
        link: "https://pipi.com.hr/",
      },
      {
        link: "https://www.scst.unist.hr/",
      },
      {
        link: "https://slobodnadalmacija.hr/",
      },
      {
        link: "https://tommy.hr/",
      },
      {
        link: "https://www.uber.com/hr/hr/",
      },
    ],
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
