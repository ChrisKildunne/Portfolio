import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashBoard from './components/DashBoard/Dashboard';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe/AboutMe';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </Router>
  );
}


