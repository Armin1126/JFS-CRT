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
        <div className="project-item placeholder">
          <h2>Coming Soon</h2>
          <p>More projects will be added here.</p>
          <button className="project-btn disabled" disabled>Coming Soon</button>
        </div>
        <div className="project-item placeholder">
          <h2>Coming Soon</h2>
          <p>More projects will be added here.</p>
          <button className="project-btn disabled" disabled>Coming Soon</button>
        </div>
      </div>
    </div>
  );
}

export default Projects;