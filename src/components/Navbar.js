import './NavbarStyles.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);

  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', changeBackground);

  return (
    <div className={navbar ? 'header header-bg' : 'header'}>
      <Link to="/">
        <h1 className="header-title">Portfolio .</h1>
      </Link>
      <ul className={open ? 'nav-menu active' : 'nav-menu'}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="burger" onClick={handleClick}>
        {open ? (
          <FaTimes size={25} style={{ color: '#fff' }} />) : (
            <FaBars size={25} style={{ color: '#fff' }} />)}
      </div>
    </div>
  );
};

export default Navbar;
