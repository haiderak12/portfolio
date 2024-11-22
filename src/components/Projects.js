import React from "react";
import '../assets/styles/Projects.css'

export default function Projects() {
    return (
        <div className="container" id="projects">
            <div className="projects-container">
                <h1>PROJECTS</h1>
                <div className="projects-grid">
                    <div className="project">
                        <h3>Keta</h3>
                    </div>
                    <div className="project">
                        <h3>Kmeans Clustering Visualization</h3>
                    </div>
                    <div className="project">
                        <h3>Battleship AI Agent</h3>
                    </div>
                    <div className="project">
                        <h3>8 Puzzle AI Solver</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}