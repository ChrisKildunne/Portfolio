import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe/AboutMe';
import Home from './components/Home/Home';

function AnimatedRoutes() {
    let location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<AboutMe />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
}

export default function App() {
    return (
        <Router>
            <Header />
            <AnimatedRoutes />
        </Router>
    );
}
