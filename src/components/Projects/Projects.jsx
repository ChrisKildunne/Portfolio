import './Projects.css';

export default function Projects() {
    return (
        <div className="projects-wrapper">
            
            {/* Board-Shop Project */}
            <div className="card board-container shadow-lg board-shop-card">
                <div className="card-body">
                    <ul className="project-details">
                        <li>Engineered a full-stack, e-commerce snowboard shop, using React.js and Node.js, integrating full CRUD operations. </li>
                        <li>Incorporated Stripe API for secure processing of one-time online payments. </li>
                        <li> Leveraged Bootstrap for UI/UX design, utilizing pre-built components, to accelerate development.</li>
                    </ul>
                    <div className="card-links">
                        <a
                            className="github-project"
                            href="https://github.com/ChrisKildunne/board-shop"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Board-Shop Code
                        </a>
                        &nbsp; || &nbsp;
                        <a
                            className="github-project"
                            href="https://board-shop-81f8a4bd2226.herokuapp.com/orders/new"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Deployed App 
                        </a>
                    </div>
                </div>
            </div>

            {/* Outings Project */}
            <div className="card board-container shadow-lg outings-card">
                <div className="card-body">
                    <ul className="project-details">
                        <li>Utilized PostgreSQL, Django, and Python to build a full-stack application from scratch, with full CRUD operations. </li>
                        <li>Leveraged Django's built-in authentication system, which provided a robust and reliable framework for user management. This system allowed my team to integrate user authentication features into the application. </li>
                        <li>Collaborated with a team of developers to build a website where party planners can post events that they are hosting surrounding sporting events, i.e tailgates, after parties etc.</li>
                        <li>Integrated Google Maps API to enable users to seamlessly post event locations.</li>
                    </ul>
                    <div className="card-links">
                        <a
                            className="github-project"
                            href="https://github.com/ChrisKildunne/outings"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Outings Code
                        </a>
                        &nbsp; || &nbsp;
                        <a
                            className="github-project"
                            href="https://outings-af5fe22770a5.herokuapp.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Deployed App 
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}
