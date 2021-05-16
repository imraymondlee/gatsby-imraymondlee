import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const ProjectPage = ({ data }) => {
  if (!data) return null;
  const document = data.allPrismicProjectPage.edges[0].node;

  return (
    <Layout>
      <h1>{document.data.title.text}</h1>
      <p>{document.data.subtitle.text}</p>
    </Layout>
  );
};

export const query = graphql`
  query ProjectPageQuery($uid: String) {
    allPrismicProjectPage(filter: { uid: { eq: $uid } }) {
      edges {
        node {
          uid
          data {
            title {
              text
            }
            subtitle {
              text
            }
          }
        }
      }
    }
  }
`;

export default ProjectPage;
