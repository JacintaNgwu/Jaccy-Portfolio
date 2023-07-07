import React from 'react';

import Navbar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';
import Work from '../components/Work';

const Projects = () => (
  <div>
    <Navbar />
    <HeroImg2
      heading="MY PROJECTS"
      text="Here, you will find a curated selection of projects that I have worked on. Each project represents a unique challenge and an opportunity for me to showcase my skills and expertise.
      Each project listed here comes with a detailed description, highlighting the key features, technologies used.
      Additionally, you will find links to live demos, GitHub repositories, and any relevant case studies or articles I have written about the project. This allows you to
      explore the projects in more depth and understand the intricacies of the development process.
      I hope you enjoy browsing through my projects!"
    />
    <Work />
  </div>
);

export default Projects;
