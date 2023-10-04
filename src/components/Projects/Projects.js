import './Projects.css';

export default function Projects() {
    return (
        <div className="projects-wrapper">
         
            <div className="card board-container shadow-lg board-shop-card">
                <div className="card-body">
                    <div className="card-text">
                        <a
                            className="github-project"
                            href="https://github.com/ChrisKildunne/board-shop"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Board-Shop Code
                        </a>
                    </div>
                    <div className="card-text">
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

            <div className="card board-container shadow-lg outings-card">
                <div className="card-body">
                    <div className="card-text">
                        <a
                            className="github-project"
                            href="https://github.com/ChrisKildunne/outings"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Outings Code
                        </a>
                    </div>
                    <div className="card-text">
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
