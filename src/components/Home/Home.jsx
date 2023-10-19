import React from 'react';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
    const scrollTo = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div>
            <div className="container mt-5 text-center" id='top'>
                <img src="https://i.imgur.com/UAXl5cF.jpg" alt="Chris Kildunne" className="img-fluid rounded-circle" style={{ maxWidth: "200px" }} />
                <div className="typewriter">
                  <h1>Chris Kildunne</h1>
                </div>
                <h3 style={{ fontStyle: 'italic', color: '#555' }}>
                    Software Engineer
                </h3>
                <button onClick={() => scrollTo("contact-section")} className="btn btn-custom mt-3">Contact Me</button>
                <button onClick={() => scrollTo("about")} className="btn btn-custom mt-3">About Chris</button>
                <button onClick={() => scrollTo("project")} className="btn btn-custom mt-3">Portfolio</button>
            </div>
            
            <div id="contact-section">
    {/* <h2>Contact</h2> */}

    <div className="contact-group">
        <FontAwesomeIcon icon={faGithub} size="2x" />
        <a className="nav-link contact-link"
           href="https://github.com/ChrisKildunne"
           target="_blank"
           rel="noopener noreferrer">
           GitHub
        </a>
    </div>

    <div className="contact-group">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
        <a className="nav-link contact-link"
           href="https://www.linkedin.com/in/christopher-kildunne/"
           target="_blank"
           rel="noopener noreferrer">
           LinkedIn
        </a>
    </div>

    <div className="contact-group">
        <p>Email: <a href="mailto:chriskildunne@gmail.com" className="contact-link">chriskildunne@gmail.com</a></p>
    </div>

    <div className="contact-group">
        <p>Phone: 516-404-9876</p>
    </div>

    <div className="contact-group">
        <p><a href="https://drive.google.com/file/d/1SjGm5fYhNrG9KhG_8LblAq5S5gEPP2K9/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="contact-link">View Resume</a></p>
    </div>
    <div className='contact-group'>
        <button onClick={() => scrollTo("about")} className="btn btn-custom mt-3">About Chris</button>
        <button onClick={() => scrollTo("project")} className="btn btn-custom mt-3">Portfolio</button>
        <button onClick={() => scrollTo("top")} className="btn btn-custom mt-3">Back To Top</button>
    </div>
    
</div>
<div className="about-container" id= "about">
                    <h1>About </h1>
             
            <section className="about-content">
                <div className="intro">
                    <p>I'm a software engineer based in the vibrant Salt Lake Metropolitan area. My journey into the tech world began with the Software Engineering Bootcamp at General Assembly. It was in this immersive environment that I discovered my passion for the intricate puzzle that is coding. Drawing from my background in hospitality, I've honed a unique perspective that complements my technical skills, positioning me as a valuable addition to any development team.</p>
                    <p>I hold a Bachelor's Degree in Economics from the University of Colorado, Boulder, and boast over four years of experience in the hospitality sector. On top of this, I proudly possess a Certificate of Completion from General Assembly's rigorous Software Engineering Immersive course.</p>
                    <p>Outside of coding, I'm an avid outdoor enthusiast. Snowboarding, mountain biking, climbing, or fishing - I relish every opportunity to embrace the outdoors.</p>
                    </div>
         <div className="skills-section" >
            <ul className="skills-list">
            <li>JavaScript</li>
            <li>Python</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Django</li>
            <li>MongoDB/Mongoose</li>
            <li>Express</li>
            <li>JSON</li>
            <li>HTML</li>
            <li>CSS</li>
            </ul>
             </div>
         </section>
        </div>
        <div className="text-center">
                            <button onClick={() => scrollTo("project")} className="btn btn-custom mt-3">Portfolio</button>
                            <button onClick={() => scrollTo("top")} className="btn btn-custom mt-3">Back To Top</button>
        </div>
        <div className="container mx-auto mt-4 custom-margin" id='project'>
            <div className="row">

                {/* Board-Shop Project */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card custom-card" style={{ width: "18rem" }}>
                        <img src="https://i.imgur.com/408ClnQ.jpg" className="card-img-top" alt="Board-Shop Project" />
                        <div className="card-body">
                            <h5 className="card-title">Board-Shop</h5>
                            <ul>
                                <li>Engineered a full-stack, e-commerce snowboard shop, using React.js and Node.js, integrating full CRUD operations. </li>
                                {/* <li>Incorporated Stripe API for secure processing of one-time online payments. </li>
                                <li>Leveraged Bootstrap for UI/UX design, utilizing pre-built components, to accelerate development.</li> */}
                            </ul>
                            <a
                                className="btn mr-2"
                                href="https://github.com/ChrisKildunne/board-shop"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-github"></i> Code
                            </a>
                            <a
                                className="btn"
                                href="https://board-shop-81f8a4bd2226.herokuapp.com/orders/new"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fas fa-link"></i> Deployed App 
                            </a>
                        </div>
                    </div>
                </div>


                {/* Outings Project */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card custom-card" style={{ width: "18rem" }}>
                        <img src="https://i.imgur.com/QdNzSgo.png" className="card-img-top" alt="Outings Project" />
                        <div className="card-body">
                            <h5 className="card-title">Outings</h5>
             
                            <ul>
                                <li>Utilized PostgreSQL, Django, and Python to build a full-stack event planning application surround sporting events </li>
                                {/* <li>Leveraged Django's built-in authentication system, which provided a robust and reliable framework for user management. This system allowed my team to integrate user authentication features into the application. </li>
                                <li>Collaborated with a team of developers to build a website where party planners can post events that they are hosting surrounding sporting events, i.e tailgates, after parties etc.</li>
                                <li>Integrated Google Maps API to enable users to seamlessly post event locations.</li> */}
                            </ul>
                            <a
                                className="btn mr-2"
                                href="https://github.com/ChrisKildunne/outings"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-github"></i> Code
                            </a>
                            <a
                                className="btn"
                                href="https://outings-af5fe22770a5.herokuapp.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fas fa-link"></i> Deployed App 
                            </a>
                        </div>
                    </div>
                </div>

                {/* Vinny-Hair Project */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card custom-card" style={{ width: "18rem" }}>
                        <img src="https://i.imgur.com/KH4CaDX.png" className="card-img-top" alt="Board-Shop Project" />
                        <div className="card-body">
                            <h5 className="card-title">Vinny's Hair</h5>
                            <ul>
                            <li>Designed and developed a dynamic full-stack platform tailored for Vinny, a professional hairstylist, showcasing some of his favorite styles and enabling clients to book appointments</li>
                                {/* <li>Seamlessly integrated the Twilio API to offer real-time text confirmations to clients. Employed the Nodemailer API, enabling instant booking notifications directly to the inbox.</li>
                                <li>Currently in the process of integrating Stripe to facilitate secure merchandise purchases.</li> */}
                            </ul>
                            <a
                                className="btn mr-2"
                                href="https://github.com/ChrisKildunne/Vinnys-Hair"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-github"></i> Code
                            </a>
                            <a
      
                                className="btn"
                                href="https://your-hair-suks-50fdd50ef999.herokuapp.com/mywork"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fas fa-link"></i> Deployed App 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    </div>
    );
}
