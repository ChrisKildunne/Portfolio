import React from 'react';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
    const scrollToContact = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); 
    }

    return (
        <div>
            <div className="container mt-5 text-center">
                <img src="https://i.imgur.com/UAXl5cF.jpg" alt="Chris Kildunne" className="img-fluid rounded-circle" style={{ maxWidth: "200px" }} />
                <div className="typewriter">
                  <h1>Chris Kildunne</h1>
                </div>
                <h3 style={{ fontStyle: 'italic', color: '#555' }}>
                    Software Engineer
                </h3>
                <button onClick={scrollToContact} className="btn btn-custom mt-3">Contact Me</button>
            </div>
            
            <div id="contact-section">
                <h2>Contact</h2>
                <p>
                   <a href="mailto:chriskildunne@gmail.com" className="contact-link">chriskildunne@gmail.com</a>
                </p>
                <p>516-404-9876</p>
                <p>
            <a href="https://drive.google.com/file/d/1SjGm5fYhNrG9KhG_8LblAq5S5gEPP2K9/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="contact-link">View my Resume</a>
             </p>
                <a className="nav-link"
                   href="https://github.com/ChrisKildunne"
                   target="_blank"
                   rel="noopener noreferrer">
                   <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>

                <span className="navbar-text mx-3"></span>

                <a className="nav-link"
                   href="https://www.linkedin.com/in/christopher-kildunne/"
                   target="_blank"
                   rel="noopener noreferrer">
                   <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
            </div>
        </div>
    );
}
