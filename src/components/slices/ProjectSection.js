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

const ProjectSection = ({ slice }) => {
  return (
    <StyledSection>
      <StyledHeading>{slice.primary.heading.text}</StyledHeading>
      {slice.items.map((sectionItem, index) => {
        return (
          <React.Fragment key={`section-item=${index}`}>
            <StyledSubheading>{sectionItem.subheading.text}</StyledSubheading>
            <p>{sectionItem.paragraph.text}</p>
          </React.Fragment>
        );
      })}
    </StyledSection>
  );
};

export default ProjectSection;
