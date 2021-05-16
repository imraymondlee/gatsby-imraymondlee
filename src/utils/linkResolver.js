const linkResolver = (doc) => {
  if (doc.type === 'project_page') {
    return `/${doc.uid}`;
  }

  return '/';
};

module.exports = linkResolver;
