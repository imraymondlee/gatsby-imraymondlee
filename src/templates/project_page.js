import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SliceZone from '../components/SliceZone';

const ProjectPage = ({ data }) => {
  if (!data) return null;
  const document = data.allPrismicProjectPage.edges[0].node;

  return (
    <Layout>
      <h1>{document.data.title.text}</h1>
      <p>{document.data.subtitle.text}</p>
      <SliceZone slices={document.data.body} />
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
            subtitle {
              text
            }
            title {
              text
            }
            body {
              ... on PrismicProjectPageBodySection {
                slice_type
                items {
                  subheading {
                    text
                  }
                  paragraph {
                    text
                  }
                }
                primary {
                  heading {
                    text
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default ProjectPage;
