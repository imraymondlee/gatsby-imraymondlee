import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  max-width: 700px;
  margin: 5rem auto;
`;

const StyledHeading = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.953rem;
  line-height: 1.25;
`;

const StyledSubheading = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.25rem;
  line-height: 1.22222222;
`;

const StyledFigure = styled.figure`
  margin: 3rem auto;
`;

const StyledFigCaption = styled.figcaption`
  margin-top: 1rem;
  font-style: italic;
  color: #737373;
`;

const StyledImage = styled.img`
  display: block;
  width: 100%;
  box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%);
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
            {sectionItem.paragraph.text && <p>{sectionItem.paragraph.text}</p>}
            {sectionItem.image.url && (
              <StyledFigure>
                <StyledImage
                  src={sectionItem.image.url}
                  alt={sectionItem.image.alt}
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
