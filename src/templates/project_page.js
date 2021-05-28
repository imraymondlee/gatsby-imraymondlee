import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SliceZone from '../components/SliceZone';

const StyledBanner = styled.div`
  margin: 1rem 0 2rem 0;
`;

const StyledTitle = styled.h1`
  margin: 0;
  font-size: 2.441rem;
`;

const StyledSubtitle = styled.p`
  margin: 0;
  font-size: 1.125rem;
`;

const StyledDescription = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 852px) {
    flex-direction: row;
  }
`;

const StyledDescriptionImage = styled.div`
  flex-basis: 70%;
`;

const StyledDescriptionText = styled.div`
  flex-basis: 25%;
  margin-top: 2rem;

  @media (min-width: 852px) {
    margin-top: 0;
  }
`;

const StyledDescriptionLabel = styled.div`
  color: ${(props) => props.theme.colors.secondary};
  font-weight: 700;
`;

const StyledList = styled.ul`
  margin: 0 0 1.5rem 0;
  padding: 0;
  list-style: none;
  font-size: 0.9rem;
`;

const StyledImage = styled.img`
  display: block;
  width: 100%;
  box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%);
`;

const StyledDivider = styled.hr`
  width: 30%;
  margin: 3.5rem auto;
  border-bottom: 3px solid #007d99;
`;

const ProjectPage = ({ data }) => {
  if (!data) return null;
  const document = data.allPrismicProjectPage.edges[0].node;

  return (
    <Layout projectPage={true}>
      <section>
        <StyledBanner>
          <StyledTitle>{document.data.title.text}</StyledTitle>
          <StyledSubtitle>{document.data.subtitle.text}</StyledSubtitle>
        </StyledBanner>
        <StyledDescription>
          <StyledDescriptionImage>
            <StyledImage
              width="400"
              src={document.data.hero_image.url}
              alt={document.data.hero_image.alt}
            />
          </StyledDescriptionImage>
          <StyledDescriptionText>
            <StyledDescriptionLabel>Technologies</StyledDescriptionLabel>
            <StyledList>
              {document.data.technologies.raw.map((item, index) => {
                return <li key={index}>{item.text}</li>;
              })}
            </StyledList>
            <StyledDescriptionLabel>Links</StyledDescriptionLabel>
            <StyledList>
              {document.data.links.raw.map((item, index) => {
                return (
                  <li key={index}>
                    <a href={item.spans[0].data.url}>{item.text}</a>
                  </li>
                );
              })}
            </StyledList>
          </StyledDescriptionText>
        </StyledDescription>
      </section>
      <StyledDivider />
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
            hero_image {
              url
              alt
            }
            technologies {
              raw
            }
            links {
              raw
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
                  image {
                    alt
                    url
                  }
                  image_caption {
                    text
                  }
                  image_original_fit
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
