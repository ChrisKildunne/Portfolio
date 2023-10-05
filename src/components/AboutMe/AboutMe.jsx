import './AboutMe.css';

export default function AboutMe(){
    return (
            <div className="about-container">
                <header className="about-header">
                    <h1>About</h1>
                </header>
            <section className="about-content">
                <div className="intro">
                    <p>I'm a software engineer based in the vibrant Salt Lake Metropolitan area. My journey into the tech world began with the Software Engineering Bootcamp at General Assembly. It was in this immersive environment that I discovered my passion for the intricate puzzle that is coding. Drawing from my background in hospitality, I've honed a unique perspective that complements my technical skills, positioning me as a valuable addition to any development team.</p>
                    <p>I hold a Bachelor's Degree in Economics from the University of Colorado, Boulder, and boast over four years of experience in the hospitality sector. On top of this, I proudly possess a Certificate of Completion from General Assembly's rigorous Software Engineering Immersive course.</p>
                    <p>Outside of coding, I'm an avid outdoor enthusiast. Snowboarding, mountain biking, climbing, or fishing - I relish every opportunity to embrace the outdoors.</p>
                    </div>
         <div className="skills-section">
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
            
    )
}