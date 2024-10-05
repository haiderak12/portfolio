import React from "react";
import '../assets/styles/Experience.css'
import sunrise_logo from '../assets/images/sunriselabs_logo.png'

export default function Experience() {
    return (
        <div className="container" id="work-experience">
            <div className="experience-container">
                <h1>EXPERIENCE</h1>
                <div className="experience-grid">
                    <div className="position">
                        <h3>Software Engineering Intern</h3>
                        <h4>Sunrise Labs Inc. | <span>May 2024 - Aug 2024</span></h4>
                        <ul>
                            <li>Contributed to the bone growth stimulation device for Zavation Medical Products.</li>
                            <li>Developed and deployed 11 software unit tests for embedded software <span className="keyword">
                                Google Test C++ framework</span> including setup for testing 
                                environment/infrastructure; Repaired several source code bugs and 
                                averaged <span className="keyword">91% code coverage</span> per unit.</li>
                            <li>Assisted in preparation for software demo unit through app and firmware testing 
                                in <span className="keyword">C#</span> and <span className="keyword">STM32Cube</span>. 
                                Testing includes bluetooth connection, serial port connection, transmitter functionality, 
                                hardware functionality, etc.</li>
                            <li>Contributed to approximately <span className="keyword">$30k in revenue</span> through 
                                contractor work.</li>
                        </ul>
                    </div>
                    <div className="position">
                        <h3>Software Engineering Intern</h3>
                        <h4>Allegro Microsystems | <span>May 2023 - Aug 2023</span></h4>
                        <ul>
                            <li>Contributed to 3 projects to be integrated in following sensor firmware products.</li>
                            <li>Set up and configured signal path model 
                                in <span className="keyword">MATLAB Simulink</span> for <span className="keyword">embedded-C 
                                code</span> generation using Embedded Coder to improve readability, minimize global data 
                                access, and enable more flexibility for incorporating multiple structs of model data read 
                                from EEPROM, improving overall efficiency for embedded software integration.</li>
                            <li>Setup for <span className="keyword">CI/CD pipeline</span> for continuously implementing 
                                code/modeling changes at every new commit for better automation.</li>
                            <li>Developed strong oral presentation and communication skills through company presentations.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}