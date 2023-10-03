export default function Header() {
    return (
        <div className="header-links">
            <a
                className="github-link"
                href="https://github.com/ChrisKildunne"
                target="_blank"
                rel="noopener noreferrer" // Important for security
            >
                My GitHub
            </a>
            &nbsp; | &nbsp;
            <a
                className="linkedin-link"
                href="https://www.linkedin.com/in/christopher-kildunne/"
                target="_blank"
                rel="noopener noreferrer" // Important for security
            >
                My LinkedIn
            </a>
        </div>
    );
}