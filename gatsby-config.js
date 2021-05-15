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
  ],
};
