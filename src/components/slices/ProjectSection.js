import React from 'react';

const ProjectSection = ({ slice }) => {
  debugger;
  return (
    <section>
      <h1>{slice.primary.heading.text}</h1>
      {slice.items.map((sectionItem, index) => {
        return (
          <React.Fragment key={`section-item=${index}`}>
            <h2>{sectionItem.subheading.text}</h2>
            <p>{sectionItem.paragraph.text}</p>
          </React.Fragment>
        );
      })}
    </section>
  );
};

export default ProjectSection;
