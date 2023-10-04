import React, { useEffect, useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashBoard from './components/DashBoard/Dashboard';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe/AboutMe';

export default function App() {
  const [nameDisplay, setNameDisplay] = useState('');
  const fullName = "Chhris Kildunne";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullName.length) {
        setNameDisplay((prevName) => prevName + fullName.charAt(i));
        i++;
      }
       else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </Router>
      <div className="container mt-5 text-center">
        <img src="https://i.imgur.com/UAXl5cF.jpg" alt="Chris Kildunne" className="img-fluid rounded-circle" style={{ maxWidth: "200px" }} />
        <h1 className="mt-3" style={{ fontFamily: '"Lucida Console", Monaco, monospace', letterSpacing: '2px' }}>
          {nameDisplay.split("").map((letter, index) => (
            <span key={index} style={{ animation: 'drop 0.3s forwards', animationDelay: `${index * 100}ms` }}>{letter}</span>
          ))}
        </h1>
        <h3 style={{ fontStyle: 'italic', color: '#555' }}>
          Software Engineer
        </h3>
      </div>
    </>
  );
}
