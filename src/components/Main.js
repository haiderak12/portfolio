import React from "react";
import { useState } from "react";
import portrait from '../assets/images/portrait.JPEG'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import '../assets/styles/Main.css'

export default function Main() {
    return (
        <div className="container" id="main">
            <div className="main-container">
                <div className="portrait">
                    <img src={portrait} alt="portrait" width={250} id="portrait" />
                </div>
                <div className="title">
                    <div className="social_icons">
                        <a href="https://github.com/haiderak12" target="_blank" rel="noreferrer"><GitHubIcon/></a>
                        <a href="https://www.linkedin.com/in/haiderkhan12" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
                    </div>
                    <h1>HAIDER KHAN</h1>
                    <div className="subtitle">
                        <p>Welcome! Scroll to view my portfolio</p>
                        <KeyboardArrowDownIcon />
                    </div>
                </div>
            </div>
        </div>
    );
}