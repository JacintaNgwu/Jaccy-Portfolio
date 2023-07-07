import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg from '../components/HeroImg';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from '../components/Footer';

const Home = () => (
  <div>
    <Navbar />
    <HeroImg />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </div>
);

export default Home;
