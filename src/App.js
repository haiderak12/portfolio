import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-scroll";

import Main from './components/Main';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {

  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const proficiencySection = document.getElementById('proficiency');
      const rect = proficiencySection.getBoundingClientRect();
      if (rect.top <= 1000) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="App">
      <header className='nav'>
        <nav className="nav__container__actions">
            <div id='home-button'>
              <Link activeClass="active" smooth spy to="about">
                <HomeIcon />
              </Link>
            </div>
            <div id='tabs'>
              <ul>
                <li>
                  <Link activeClass="active" smooth spy to="education">
                    <p>EDUCATION</p>
                  </Link>
                </li>
                <li>
                  <Link activeClass="active" smooth spy to="proficiency">
                    <p>PROFICIENCY</p>
                  </Link>
                </li>
                <li>
                  <Link activeClass="active" smooth spy to="experience">
                    <p>EXPERIENCE</p>
                  </Link>
                </li>
                <li>
                  <Link activeClass="active" smooth spy to="projects">
                    <p>PROJECTS</p>
                  </Link>
                </li>
                <li>
                  <Link activeClass="active" smooth spy to="contact">
                    <p>CONTACT</p>
                  </Link>
                </li>
              </ul>
            </div>
        </nav>
      </header>
      <section id="about">
        <Main />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="proficiency">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">PROJECTS</section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}