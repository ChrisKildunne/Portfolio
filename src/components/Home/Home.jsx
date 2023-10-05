import React, { useEffect, useState } from 'react';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
    const [nameDisplay, setNameDisplay] = useState('');
    const fullName = "C-hris Kildunne";

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < fullName.length) {
                setNameDisplay((prevName) => prevName + fullName.charAt(i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 100);

        return () => clearInterval(timer);
    }, []);

    const scrollToContact = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); 
    }

    return (
        <div>
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
                <button onClick={scrollToContact} className="btn btn-primary mt-3">Contact Me</button>
            </div>
            
            <div id="contact-section">
                <h2>Contact</h2>
                <p>Email: chriskildunne@gmail.com</p>
                <p>Phone: 516-404-9876</p>
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
