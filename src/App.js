
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import TodoList from './TodoList';
import Timer from './timer';
import ImageCarousel from './ImageCarousel.js';
import Login from './login';
import Registration from './registration';
import Projects from './Projects';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/carousel" element={<ImageCarousel />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
