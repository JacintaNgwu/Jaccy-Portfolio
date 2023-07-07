import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';

const About = () => (
  <div className="about">
    <div className="about-me">
      <Navbar />
      <HeroImg2
        heading="ABOUT ME"
        text="I am a passionate and dedicated developer with a strong love for creating innovative,
        user-friendly website and mobile applications. I have had the opportunity to work on a wide range of projects,
        spanning various technologies. I am a firm believer in continuous learning and growth.
        Collaboration and communication are at the core of my work ethic. I enjoy working in
        cross-functional teams,leveraging the diverse skills and perspectives of others to create
        exceptional products. I believe that open and constructive communication is crucial
        for successful collaborations, as it fosters trust, encourages new ideas,
        and ensures everyone is aligned towards a common goal.
        If you have any questionsor would like to discuss potential projects, please do not hesitate to reach out.
        I look forward to connecting with you and exploring how we can work together
        to create something remarkable."
      />
      <div className="btn-link">
        <a href="https://docs.google.com/document/d/1QPGEtsqMpJvguPU7DzOd28vh6tuLeDvMsRej9Z9Xfsk/edit">
          <button className="btn" type="button">Get My CV</button>
        </a>
      </div>
    </div>
    <div className="skills-container">
      <div className="skills">
        <h2 className="skills-title">Language</h2>
        <ul className="skills-list">
          <li className="skills-item">HTML</li>
          <li className="skills-item">CSS</li>
          <li className="skills-item">JavaScript</li>
          <li className="skills-item">Ruby</li>
          <li className="skills-item">SQL</li>
        </ul>
      </div>
      <div className="skills">
        <h2 className="skills-title">Frameworks</h2>
        <ul className="skills-list">
          <li className="skills-item">React</li>
          <li className="skills-item">Redux</li>
          <li className="skills-item">Ruby on Rails</li>
          <li className="skills-item">Bootstrap</li>
          <li className="skills-item">PostSQL</li>
          <li className="skills-item">Capybara</li>
          <li className="skills-item">rspec</li>
        </ul>
      </div>
      <div className="skills">
        <h2 className="skills-title">Tools</h2>
        <ul className="skills-list">
          <li className="skills-item">Git</li>
          <li className="skills-item">GitHub</li>
          <li className="skills-item">VS Code</li>
          <li className="skills-item">Terminal</li>
          <li className="skills-item">Codepen</li>
          <li className="skills-item">Postman</li>
        </ul>
      </div>
      <div className="skills">
        <h2 className="skills-title">Design</h2>
        <ul className="skills-list">
          <li className="skills-item">Figma</li>
          <li className="skills-item">Canva</li>
        </ul>
      </div>
      <div className="skills">
        <h2 className="skills-title">Soft Skills</h2>
        <ul className="skills-list">
          <li className="skills-item">Teamwork</li>
          <li className="skills-item">Communication</li>
          <li className="skills-item">Problem Solving</li>
          <li className="skills-item">Time Management</li>
          <li className="skills-item">Adaptability</li>
          <li className="skills-item">Creativity</li>
          <li className="skills-item">Remote Pair-Programming</li>
          <li className="skills-item">Mentoring</li>
        </ul>
      </div>
    </div>
  </div>
);

export default About;
