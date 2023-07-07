import './WorkCardStyles.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

const WorkCard = (props) => (
  <div className="projects-card">
    <img src={props.imgsrc} alt="images" />
    <h2 className="project-title">{props.title}</h2>
    <div className="pro-details">
      <p className="pro-description">{props.text}</p>
      <div className="pro-btns">
        <NavLink to={props.view} className="btns">View</NavLink>
        <NavLink to={props.source} className="btns">Source</NavLink>
      </div>
    </div>
  </div>
);

export default WorkCard;
