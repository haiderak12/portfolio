import React from "react";
import '../assets/styles/Education.css'
import emblem from '../assets/images/bu_emblem.png'
import emblem_white from '../assets/images/bu_emblem_white.png'
import Chip from '@mui/material/Chip';

const coursework = [
    "Intro to CS",
    "Data Structures",
    "Algorithm Design",
    "Combinatoric Structures",
    "Linear Algebra",
    "Probibalility in Computing",
    "Software Engineering",
    "Computing Systems",
    "Web App Development",
    "Intro to AI",
    "Database Systems",
    "Full Stack Development",
    "Applied Machine Learning",
    "Tools in Data Science"
]

export default function Education() {
    return (
        <div className="container" id="school">
            <div className="education-container">
                <h1>EDUCATION</h1>
                <div className="content">
                    <div className="emblem">
                        <img src={emblem_white} alt="emblem" width={350} />
                    </div>
                    <div className="text-content">
                        <h2>B.A. in Computer Science</h2>
                        <h3>2021 - 2025</h3>
                        <div className="flex-chips">
                        <span className="chip-title">Select Coursework:</span>
                            {coursework.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}