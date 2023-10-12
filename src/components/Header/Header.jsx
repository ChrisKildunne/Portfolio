import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
   
    return (
        <footer className="footer bg-light fixed-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="footer-links">
                            <div className="icon-link">
                                <a
                                    href="https://github.com/ChrisKildunne"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon icon={faGithub} size="2x" />
                                </a>
                            </div>

                            <span className="navbar-text mx-3"></span>

                            <div className="icon-link">
                                <a
                                    href="https://www.linkedin.com/in/christopher-kildunne/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
