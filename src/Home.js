import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Java FullStack CRT Projects</h1>
      <p>Welcome to the Java FullStack Project that I did during the time of Campus Recruitment Training.</p>
      <p>This project showcases various applications and tools developed using Java and related technologies.</p>
      <Link to="/login">
        <button className="login-btn">Login</button>
      </Link>
    </div>
  );
}

export default Home;