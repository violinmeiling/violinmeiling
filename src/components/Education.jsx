import './Education.css';
import { useState } from "react";

function Education() {
  const [coursesOpen, setCoursesOpen] = useState(false);

  const scrollToPennActivities = () => {
    const tabsSection = document.getElementById('tabs');
    if (tabsSection) {
      tabsSection.scrollIntoView({ behavior: 'smooth' });
      // Wait for scroll to complete, then click the Penn Activities tab
      setTimeout(() => {
        const pennButton = document.querySelector('[data-tab="penn"]');
        if (pennButton) {
          pennButton.click();
        }
      }, 500);
    }
}
    const scrollToTonkaActivities = () => {
    const tabsSection = document.getElementById('tabs');
    if (tabsSection) {
      tabsSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const tonkaButton = document.querySelector('[data-tab="tonka"]');
        if (tonkaButton) {
          tonkaButton.click();
        }
      }, 500);
    }
  };

  return (
    <section className="education" id="education">
      <div className="section-content">
        <div className="education-header">
          <h2>Education</h2>
        </div>
        <div className="education-card">
          <h3>Computer and Information Science (BSE)</h3>
          <h4>University of Pennsylvania, School of Engineering and Applied Science</h4>
          <p className="graduation">Graduating May 2027 one way or another</p>
          <p className="concentration">
  <strong>Concentration:</strong> Artificial Intelligence<br />

  <strong>Minors:</strong> Data Science, Mathematics, Economics, Engineering Entrepreneurship

  <br />
  <p className="activities-intro">
            I led the aerospace club for two years, 
            served as president of Penn's premier tech and design club, 
            and now help run our swing dancing troupe.
            <br /><br />
            In my spare time, I am working toward my bachelor's degree in Computer Science.
          </p>

  <span
    className="coursework-toggle"
    onClick={() => setCoursesOpen(!coursesOpen)}
  >
    The bachelor's degree in question ▾
  </span>

  {coursesOpen && (
    <ul className="coursework-list">
      
      <li>Data Structures and Algorithms (CIS 1210)</li>
      <li>Introduction to Algorithms (CIS 3200)</li>
      <li>Programming Languages and Techniques (CIS 1200)</li>
      <li>Applied Machine Learning (CIS 4190)</li>
      <li>Artificial Intelligence (CIS 4210)</li>
      <li>Scalable and Cloud Computing (NETS 2120)</li>
      <li>Introduction to Computer Systems (CIS 2400)</li>
      <li>Computer Organization and Design (CIS 4710)</li>
      <li>Operating Systems Design and Implementation (CIS 5480)</li>
      <li>Mathematical Foundations of Computer Science (CIS 1600)</li>
      <li>Automata, Computability, and Complexity (CIS 2620)</li>
      <li>Engineering Entrepreneurship I and II (EAS 5450 and EAS 5460)</li>
      <li>Human Systems Engineering (ESE 5430)</li>
      <li>Engineering Economics (ESE 5400)</li>
      <li>Intermediate Microeconomics (ECON 2100)</li>
      <li>Game Theory (ECON 4100)</li>
      <li>Market Design (ECON 4130)</li>
      <li>Behavioral Economics (ECON 4160)</li>
      <li>Statistics for Economists (ECON 2300)</li>
      <li>Multivariable Calculus (MATH 1410)</li>
      <li>Linear Algebra and Differential Equations (MATH 2400 and MATH 3120)</li>
      <li>Probability (STAT 4300)</li>
      <li>Principles of Physics I: Mechanics and Wave Motion (PHYS 0150)</li>
      <li>Principles of Physics II: Electromagnetism and Radiation (PHYS 0151)</li>
    </ul>
  )}
</p>
          
          <button onClick={scrollToPennActivities} className="read-more-button">
          Read more about the rest of my activities →
          </button>
        </div>

        <div className="education-card">
          <h3>Minnetonka High School</h3>
          <h4>2019 – 2023</h4>
          <p className="gpa"><strong>GPA: 4.65 | Summa cum laude</strong></p>
          <p className="quote-intro">
            We didn't do yearbook quotes, but my school newspaper did let me paint one on a brick on the wall of our English classroom:
            <i> "Life has a way of giving you exactly what you need and nothing more."</i>
          </p>
          <a href="/highschool" className="read-more-button">
          The secret to my college application →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Education;
