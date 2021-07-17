const linkResolver = require('./src/utils/linkResolver');

module.exports = {
  siteMetadata: {
    title: 'gatsby-imraymondlee',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Lato:400,700'],
        },
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'imraymondlee',
        linkResolver: () => linkResolver,
        schemas: {
          project_cards: require('./custom_types/project_cards.json'),
          project_page: require('./custom_types/project_page.json'),
          about_page: require('./custom_types/about_page.json'),
        },
      },
    },
    'gatsby-plugin-react-helmet',
  ],
};
