import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">


                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link> {/* Added Home link */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Me</Link>
                        </li>
                    </ul>
                    <div className="navbar-nav header-links">
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
            </div>
        </nav>
    );
}
