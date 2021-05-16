import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Landing from '../components/Landing';
import ProjectCards from '../components/ProjectCards';

// const tempProjects = [
//   {
//     title: 'Project',
//     category: 'Category',
//     description: 'Description',
//     link: '/',
//     image: '',
//     cardColor: '#b5cbec',
//   },
//   {
//     title: 'Project',
//     category: 'Category',
//     description: 'Description',
//     link: '/',
//     image: '',
//     cardColor: '#b5e6dc',
//   },
//   {
//     title: 'Project',
//     category: 'Category',
//     description: 'Description',
//     link: '/',
//     image: '',
//     cardColor: '#b5cbec',
//   },
//   {
//     title: 'Project',
//     category: 'Category',
//     description: 'Description',
//     link: '/',
//     image: '',
//     cardColor: '#b5e6dc',
//   },
//   {
//     title: 'Project',
//     category: 'Category',
//     description: 'Description',
//     link: '/',
//     image: '',
//     cardColor: '#b5cbec',
//   },
//   {
//     title: 'Project',
//     category: 'Category',
//     description: 'Description',
//     link: '/',
//     image: '',
//     cardColor: '#b5e6dc',
//   },
//   {
//     title: 'Project',
//     category: 'Category',
//     description: 'Description',
//     link: '/',
//     image: '',
//     cardColor: '#b5e6dc',
//   },
// ];

const IndexPage = ({ data }) => {
  if (!data) return null;
  const project_cards = data.allPrismicProjectCards.edges[0].node.data.card;

  return (
    <Layout>
      <Landing />
      <ProjectCards projects={project_cards} />
    </Layout>
  );
};

export const query = graphql`
  query ProjectCards {
    allPrismicProjectCards {
      edges {
        node {
          data {
            card {
              category {
                text
              }
              color {
                text
              }
              description {
                text
              }
              title {
                text
              }
              project_link {
                url
              }
              thumbnail {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
