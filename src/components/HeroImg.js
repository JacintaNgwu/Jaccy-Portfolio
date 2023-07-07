import './HeroImgStyles.css';

import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaGithub, FaTwitter, FaLinkedin, FaAngellist, FaMedium, FaEnvelope,
} from 'react-icons/fa';
import BgImg from '../assests/Bg.avif';

const HeroImg = () => (
  <div className="hero">
    <div className="mask">
      <img className="intro-img" src={BgImg} alt="Bg-img" />
    </div>

    <div className="content">
      <h1>
        HI, I'M JACINTA
        <br />
        <span> WELCOME TO MY PORTFOLIO</span>
      </h1>
      <p>
        I am a passionate and dedicated developer with a strong love for creating innovative, user-friendly website and mobile applications.
        <br />
        I also possess a keen eye for design and user experience. I understand the importance of creating visually appealing and intuitive interfaces that leave a lasting impression on users.
        {' '}
        <br />
        As you explore my portfolio, you will find examples of my work, showcasing my ability to tackle complex problems and deliver elegant solutions.
      </p>

      <div>
        <a href="https://github.com/JacintaNgwu">
          <FaGithub size={25} style={{ color: '#fff' }} />
        </a>
        <a href="https://twitter.com/jacinta_ngwu">
          <FaTwitter size={25} style={{ color: '#fff' }} />
        </a>
        <a href="https://www.linkedin.com/in/jacintangwu/">
          <FaLinkedin size={25} style={{ color: '#fff' }} />
        </a>
        <a href="https://wellfound.com/u/jacinta-ngwu">
          <FaAngellist size={25} style={{ color: '#fff' }} />
        </a>
        <a href="https://medium.com/@jacintangwu9900">
          <FaMedium size={25} style={{ color: '#fff' }} />
        </a>
        <a href="mailto:jacintangwu9900Agmail.com">
          <FaEnvelope size={25} style={{ color: '#fff' }} />
        </a>
      </div>

      <div className="btn-link">
        <a href="https://docs.google.com/document/d/1QPGEtsqMpJvguPU7DzOd28vh6tuLeDvMsRej9Z9Xfsk/edit">
          <button className="btn" type="button">Get My CV</button>
        </a>
        <Link to="/contact">
          <a href="#contact">
            <button className="btn btn-light" type="button">Contact Me</button>
          </a>
        </Link>
      </div>
    </div>
  </div>
);

export default HeroImg;
