import './WorkCardStyles.css';
import React from 'react';
import WorkCard from './WorkCard';
import WorkCardData from './WorkCardData';

const Work = () => (
  <div className="work-container">
    <h1 className="projects-heading">Featured Projects</h1>
    <div className="projects-container">
      {WorkCardData.map((val, index) => (
        <WorkCard
          key={index}
          imgsrc={val.imagsrc}
          title={val.title}
          text={val.text}
          view={val.view}
          source={val.source}
        />
      ))}
    </div>
  </div>
);

export default Work;
