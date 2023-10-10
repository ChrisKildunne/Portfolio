import './Projects.css';
import React from 'react';

export default function Projects() {
    return (
        <div className="container mx-auto mt-4">
            <div className="row">

                {/* Board-Shop Project */}
                <div className="col-md-6 mb-4">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="https://i.imgur.com/408ClnQ.jpg" className="card-img-top" alt="Board-Shop Project" />
                        <div className="card-body">
                            <h5 className="card-title">Board-Shop</h5>
                            <ul>
                                <li>Engineered a full-stack, e-commerce snowboard shop, using React.js and Node.js, integrating full CRUD operations. </li>
                                <li>Incorporated Stripe API for secure processing of one-time online payments. </li>
                                <li>Leveraged Bootstrap for UI/UX design, utilizing pre-built components, to accelerate development.</li>
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
                <div className="col-md-6 mb-4">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="https://i.imgur.com/QdNzSgo.png" className="card-img-top" alt="Outings Project" />
                        <div className="card-body">
                            <h5 className="card-title">Outings</h5>
                            <ul>
                                <li>Utilized PostgreSQL, Django, and Python to build a full-stack application from scratch, with full CRUD operations. </li>
                                <li>Leveraged Django's built-in authentication system, which provided a robust and reliable framework for user management. This system allowed my team to integrate user authentication features into the application. </li>
                                <li>Collaborated with a team of developers to build a website where party planners can post events that they are hosting surrounding sporting events, i.e tailgates, after parties etc.</li>
                                <li>Integrated Google Maps API to enable users to seamlessly post event locations.</li>
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
                <div className="col-md-6 mb-4">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="https://i.imgur.com/L4QWum4.png" className="card-img-top" alt="Board-Shop Project" />
                        <div className="card-body">
                            <h5 className="card-title">Vinny's Hair</h5>
                            <ul>
                            <li>Designed and developed a dynamic full-stack platform tailored for Vinny, a professional hairstylist, harnessing the power of React and Express.</li>
                                <li>Seamlessly integrated the Twilio API to offer real-time text confirmations to clients. Employed the Nodemailer API, enabling instant booking notifications directly to the inbox.</li>
                                <li>Currently in the process of integrating Stripe to facilitate secure merchandise purchases.</li>
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
    );
}
