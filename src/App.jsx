import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';


export default function App() {
    return (
        <Router>
            <Header />
            <Home />
        </Router>
    );
}
