const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`
    {
      allPrismicProjectPage {
        nodes {
          id
          uid
          lang
          type
          url
        }
      }
    }
  `);

  pages.data.allPrismicProjectPage.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/project_page.js'),
      context: { ...page },
    });
  });
};
