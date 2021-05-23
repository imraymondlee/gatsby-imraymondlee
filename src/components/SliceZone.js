import React from 'react';
import ProjectSection from './slices/ProjectSection';

const SliceZone = ({ slices }) => {
  const sliceComponents = {
    section: ProjectSection,
  };
  return slices.map((slice, index) => {
    const SliceComponent = sliceComponents[slice.slice_type];
    if (SliceComponent) {
      return <SliceComponent slice={slice} key={`slice-${index}`} />;
    }
    return null;
  });
};

export default SliceZone;
