import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { RichText } from 'prismic-reactjs';

const StyledSection = styled.section`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;

  @media (min-width: 852px) {
    flex-direction: row;
  }
`;

const StyledHeading = styled.h1`
  margin-bottom: 0;
  font-size: 2.441rem;
  line-height: 1.05;
`;

const StyledImage = styled.img`
  width: 10rem;
  height: 10rem;
  box-shadow: 0 10px 20px rgb(95 95 95 / 19%);
  border-radius: 50%;
`;

const StyledText = styled.div`
  flex-basis: 75%;

  @media (min-width: 852px) {
    padding-left: 1rem;
  }
`;

const AboutPage = ({ data }) => {
  if (!data) return null;
  const aboutPageData = data.allPrismicAboutPage.edges[0].node.data;

  return (
    <Layout>
      <StyledSection>
        <StyledImage src="../../profile.jpg" />
        <StyledText>
          <StyledHeading>{aboutPageData.heading.text}</StyledHeading>
          <RichText render={aboutPageData.content.raw} />
        </StyledText>
      </StyledSection>
    </Layout>
  );
};

export const query = graphql`
  query AboutPage {
    allPrismicAboutPage {
      edges {
        node {
          data {
            content {
              raw
            }
            heading {
              text
            }
          }
        }
      }
    }
  }
`;

export default AboutPage;
