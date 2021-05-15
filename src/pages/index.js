import React from 'react';
import Layout from '../components/Layout';
import Landing from '../components/Landing';
import ProjectCards from '../components/ProjectCards';

const tempProjects = [
  {
    title: 'Project',
    category: 'Category',
    description: 'Description',
    link: '/',
    image: '',
    cardColor: '#b5cbec',
  },
  {
    title: 'Project',
    category: 'Category',
    description: 'Description',
    link: '/',
    image: '',
    cardColor: '#b5e6dc',
  },
  {
    title: 'Project',
    category: 'Category',
    description: 'Description',
    link: '/',
    image: '',
    cardColor: '#b5cbec',
  },
  {
    title: 'Project',
    category: 'Category',
    description: 'Description',
    link: '/',
    image: '',
    cardColor: '#b5e6dc',
  },
  {
    title: 'Project',
    category: 'Category',
    description: 'Description',
    link: '/',
    image: '',
    cardColor: '#b5cbec',
  },
  {
    title: 'Project',
    category: 'Category',
    description: 'Description',
    link: '/',
    image: '',
    cardColor: '#b5e6dc',
  },
  {
    title: 'Project',
    category: 'Category',
    description: 'Description',
    link: '/',
    image: '',
    cardColor: '#b5e6dc',
  },
];

const IndexPage = () => {
  return (
    <Layout>
      <Landing />
      <ProjectCards projects={tempProjects} />
    </Layout>
  );
};

export default IndexPage;
