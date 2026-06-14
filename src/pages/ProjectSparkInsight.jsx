import './ProjectPage.css';
import SiteBackground from "../components/SiteBackground";
import ProjectLayout from '../components/ProjectLayout';
import { Link } from 'react-router-dom';


function ProjectSparkInsight() {
  return (
    <ProjectLayout>

      <div className="project-header">
        <SiteBackground />
        <h1>Spark Insight</h1>

        <p className="project-meta">Visualizing the internship search process</p>

         <div className="project-tags">
          <span className="tag">Best Rookie Project</span>
          <span className="tag">2024 Contrary Gen AI Hackathon</span>
        </div>

        <br />

        <div className="project-links">
          <a className="project-link"
            href="https://drive.google.com/file/d/14ZNRelMTzeBuohH8jrThrL2vvLO8VA9D/view?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
          >
            Business Pitch
          </a>

          <span> | </span>

          <a className="project-link"
            href="https://www.youtube.com/watch?v=lXbwMOg74zc"
            target="_blank"
            rel="noreferrer noopener"
          >
            Demo
          </a>

          <span> | </span>

          <a className="project-link"
            href="https://github.com/violinmeiling/sparkinsight"
            target="_blank"
            rel="noreferrer noopener"
          >
            Github
          </a>
        </div>
      </div>

      <div className="project-content">

        <p>
          I develop software, but I also manage teams, organize events, write, create marketing materials, teach, and do ML research. When looking for internships, my interests lend themselves to a pretty diverse array of opportunities. For many college students, deciding where and what to spend our summers can be a challenging task. What opportunities line up the most closely with our current experiences, and what internships would give us the chance to try something new (but still relevant to our career interests)?
        </p>

        <p>
My team and I developed Spark Insight for the 2024 Contrary Gen AI Hackathon hosted at the University of Pennsylvania. Spark Insight is an application that takes in your resume, checks it against available LinkedIn internship opportunities, and creates a visual map of your skillset compared to the jobs that are out there. Imagine yourself as a dot on a graph — dots for jobs that are the closest to your current experiences appear closer to your dot, and jobs that are less related but still applicable show up farther away. Jobs are clustered by fields; so, in my case, I might have a cluster for software, a cluster for business, a cluster for research, and a cluster for education.        </p>

        <figure>
          <img
            src="https://calculus.violinmeiling.net/wp-content/uploads/2024/12/Screenshot-2024-12-09-at-13.58.21-1024x610.png"
            alt="Spark Insight visualization"
          />
        </figure>

        <p className="caption">
          A visual map of my resume. Looks like I may have a future in marketing.
        </p>

        <p>
Nomic AI, one of the hackathon sponsors, is a startup that’s product takes in unstructured data and uses ML to sort it into categories and produce a graph mapping of said categories. We fed Nomic AI’s product LinkedIn internship data to produce the vector embeddings of the job opportunities. Then, we used an NLP service to extract keywords from a user-uploaded resume, and I wrote a Python backend to connect to Nomic AI, calculate the coordinates of the internship opportunities and user profile, and display the information on an interactive graph. Finally, I built features to filter opportunities by location, salary, work type, etc. and view the original job postings from clicking on the dots.        </p>

        <p>
This was the first hackathon I’ve ever done, and my team and I were very excited to win Best Rookie Project for our work. From working with my team for (what felt like) 24 hours straight to getting to speak with the founders of Nomic AI about their work, I thoroughly enjoyed the entire experience.        </p>

        <p>
          Looking for the sequel? Check out my second hackathon project{" "}
          <Link to="/pages/mhp">here</Link>.
        </p>

        <hr />
      </div>
    </ProjectLayout>
  );
}

export default ProjectSparkInsight;