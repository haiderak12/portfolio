// src/components/Skills.js
import React from 'react';
import Chip from '@mui/material/Chip';
import '../assets/styles/Skills.css'

const fullstackSkills = [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS",
    "Flask",
    "Python",
    "SQL",
    "MongoDB"
]

const embeddedSkills = [
    "C",
    "C++",
    "MATLAB",
    "Simulink",
    "STM32",
    "Linux/UNIX",
    "Assembly",
    "Microcontrollers"
]

const aiSkills = [
    "Java",
    "Sepia",
    "NumPy",
    "Probability",
    "Scikit-Learn",
    "OpenAI",
    "Linear algebra"
]

const sweSkills = [
    "Scrum Agile",
    "Jira",
    "Version control",
    "Git",
    "JAMA",
    "Testing",
    "CI/CD",
    "Documentation",
    "Confluence",
    "Docker"
]

export default function Skills() {
  return (
    <div className='container' id='skills'>
      <div className='skills-container'>
        <h1>PROFICIENCY</h1>
        <div className='skills-grid'>
            <div className='skill'>
                <h3>Full Stack Development</h3>
                <p>I've developed a diverse range of web applications using React and Next.js. I have lots of experience 
                    using a variety of APIs along with a solid understanding of database systems.</p>
                <div className='flex-chips'>
                    <span className='chip-title'>Tech stack:</span>
                    {fullstackSkills.map((label, index) => (
                        <Chip key={index} className='chip' label={label} />
                    ))}
                </div>
            </div>
            <div className='skill'>
                <h3>Embedded Systems</h3>
                <p>My past internships had me deeply involved with low level embedded firmware on indsutry level products, 
                    namely in sensors firmware and medical transmitter devices.
                </p>
                <div className='flex-chips'>
                    <span className='chip-title'>Tech stack:</span>
                    {embeddedSkills.map((label, index) => (
                        <Chip key={index} className='chip' label={label} />
                    ))}
                </div>
            </div>
            <div className='skill'>
                <h3>Data Science & Machine Learning</h3>
                <p>Designed AI models and Machine Learning algorithms for various applications, such as optimizing game AI using Bayesian inference. Developed robust AI solutions and models, applying concepts of data science and probability.</p>
                <div className='flex-chips'>
                    <span className='chip-title'>Tech stack:</span>
                    {aiSkills.map((label, index) => (
                        <Chip key={index} className='chip' label={label} />
                    ))}
                </div>
            </div>
            <div className='skill'>
                <h3>Software Development Lifecycle</h3>
                <p>Exposed to diverse business models where I've picked up essential development strategies, best coding practices, and important software tools.</p>
                <div className='flex-chips'>
                    <span className='chip-title'>Skills:</span>
                    {sweSkills.map((label, index) => (
                        <Chip key={index} className='chip' label={label} />
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}