import './About.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section className="about" id="about">
      <div className="section-content">
        <h2>About me</h2>
        <p className="about-blurb">
          Hi, I’m Meiling, a software developer studying Computer and Information Science 
          at the University of Pennsylvania. I enjoy tackling problems of all kinds, 
          from using <Link to="/pages/nus" className="details-link">computer vision</Link> to help aquaponics farms keep their lettuce plants alive 
          to writing code that can turn your <Link to="/pages/squishmodel" className="details-link">stuffed animals</Link> into interactive 3D browser objects. 
          My head is quite literally in the clouds 24/7 because I’m often thinking about how to 
          launch high-altitude balloons into the sky to gather data for my aerospace research.
          <br /><br />
          I’m passionate about leveraging the intersection of software and entrepreneurship to 
          do good for others, specifically by developing products that can transform the way we 
          interact with finance, <Link to="/pages/mhp" className="details-link">healthcare</Link>, and <Link to="/pages/stride" className="details-link">sustainability</Link>. When I’m not working on my 
          engineering projects, you can usually find me drafting educational policy recommendations 
          for Penn’s administration, <Link to="/music" className="details-link">rehearsing with my string quartet</Link>, or teaching Philadelphia 
          high schoolers Materials Science on the weekends.
          <br /><br />
          Please feel free to explore my work and find me on Linkedin; 
          I would love to connect with you!
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
