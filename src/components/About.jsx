import './About.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section className="about" id="about">
      <div className="section-content">
        <h2>About me</h2>
        <p className="about-blurb">
          Hi, I’m Meiling, a software developer studying Computer Science 
          at the University of Pennsylvania. I enjoy tackling problems of all kinds, 
          from using <Link to="/pages/nus" className="details-link">computer vision</Link> to help aquaponics farms keep their lettuce plants alive 
          to writing code that can turn your <Link to="/pages/squishmodel" className="details-link">stuffed animals</Link> into interactive 3D browser objects. 
          My head is quite literally in the clouds 24/7 from launching high-altitude balloons around the Delaware Valley.
          <br /><br />
          I’m passionate about creating technology that can
          do good for others, specifically by developing products that transform the way we 
          interact with finance, <Link to="/pages/mhp" className="details-link">healthcare</Link>, and <Link to="/pages/stride" className="details-link">sustainability</Link>. 
          When I’m not tinkering with code, you can usually find me befriending startup founders, <Link to="/music" className="details-link">writing songs</Link>, or rehearsing with my dance troupe.
          <br /><br />
          Please feel free to explore my work and find me on Linkedin; 
          I would love to connect with you.
        </p>
        <div className="social-links">
          <a 
            href="https://github.com/violinmeiling" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            Github
          </a>
          <a 
            href="https://linkedin.com/in/meilingmathur" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            Linkedin
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
