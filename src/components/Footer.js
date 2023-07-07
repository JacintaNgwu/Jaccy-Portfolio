import './FooterStyles.css';

import React from 'react';
import {
  FaGithub, FaTwitter, FaLinkedin, FaAngellist, FaMedium, FaEnvelope,
} from 'react-icons/fa';

const Footer = () => (
  <div className="footer">
    <p>Created and Designed by Jacinta Ngwu</p>
    <p>© 2023 - All Rights Reserved</p>
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
  </div>
);

export default Footer;
