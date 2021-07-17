import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import Landing from '../components/Landing';
import ProjectCards from '../components/ProjectCards';

const IndexPage = ({ data }) => {
  if (!data) return null;
  const project_cards = data.allPrismicProjectCards.edges[0].node.data.card;

  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <title>Raymond Lee</title>
        <meta name="description" content="My name is Raymond Lee, and I'm a web developer building accessible experiences." />
      </Helmet>
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
