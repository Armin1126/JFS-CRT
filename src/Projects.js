import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-list">
        <div className="project-item">
          <h2>ToDo List</h2>
          <p>A simple todo list application with add, edit, and delete functionality.</p>
          <Link to="/todo">
            <button className="project-btn">View Project</button>
          </Link>
        </div>
        <div className="project-item">
          <h2>Timer</h2>
          <p>A real-time clock application that updates every second.</p>
          <Link to="/timer">
            <button className="project-btn">View Project</button>
          </Link>
        </div>
        <div className="project-item">
          <h2>Image Carousel</h2>
          <p>An image carousel that automatically cycles through images.</p>
          <Link to="/carousel">
            <button className="project-btn">View Project</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;