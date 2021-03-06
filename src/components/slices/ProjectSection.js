import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  margin: 4rem auto;
`;

const StyledHeading = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.953rem;
  line-height: 1.25;
`;

const StyledSubheading = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  line-height: 1.22222222;
`;

const StyledFigure = styled.figure`
  margin: 3rem auto;
`;

const StyledFigCaption = styled.figcaption`
  margin-top: 1rem;
  text-align: center;
  font-size: 0.9rem;
  font-style: italic;
  color: ${(props) => props.theme.colors.lightText};
`;

const StyledImage = styled.img`
  display: block;
  width: 100%;
  margin: auto;
  box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%);

  ${({ originalFit }) => originalFit && 'max-width: fit-content;'}
`;

const StyledParagraph = styled.p`
  margin-bottom: 1.5rem;
`;

const ProjectSection = ({ slice }) => {
  return (
    <StyledSection>
      <StyledHeading>{slice.primary.heading.text}</StyledHeading>
      {slice.items.map((sectionItem, index) => {
        return (
          <React.Fragment key={`section-item=${index}`}>
            {sectionItem.subheading.text && (
              <StyledSubheading>{sectionItem.subheading.text}</StyledSubheading>
            )}
            {sectionItem.paragraph.text && <StyledParagraph>{sectionItem.paragraph.text}</StyledParagraph>}
            {sectionItem.image.url && (
              <StyledFigure>
                <StyledImage
                  src={sectionItem.image.url}
                  alt={sectionItem.image.alt}
                  originalFit={sectionItem.image_original_fit}
                />
                <StyledFigCaption>
                  {sectionItem.image_caption.text}
                </StyledFigCaption>
              </StyledFigure>
            )}
          </React.Fragment>
        );
      })}
    </StyledSection>
  );
};

export default ProjectSection;
