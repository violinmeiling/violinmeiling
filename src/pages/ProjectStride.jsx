import './ProjectPage.css';
import SiteBackground from "../components/SiteBackground";
import ProjectLayout from '../components/ProjectLayout';


function ProjectStride() {
  return (
    <ProjectLayout>
      

      <div className="project-header">
        <SiteBackground />
        <h1>Stride</h1>

        <p className="project-meta">
          Saving the environment one API call at a time
        </p>

        <div className="project-tags">
          <span className="tag">Penn Spark Fall 2024 Showcase</span>
          <span className="tag">Project Lead</span>
        </div>

        <br />

        <p className="project-meta">
          <strong>
            <a className="project-link"
              href="https://drive.google.com/file/d/1GS2uEKk5XH_EBhU-Yx3aKnmuzg0ceWMb/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
            {' '}|{' '}
            <a className="project-link"
              href="https://docs.google.com/presentation/d/1K-vD9XWRMI7kYx2qhHNf3OpPqhR2401Ic04RpYXCEtQ/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Showcase Slides
            </a>
          </strong>
        </p>
      </div>

      <div className="project-content">

        <p>
          If I wanted to get from my apartment to Philadelphia Chinatown, I could drive 15 minutes, sit in traffic on I-76,
          and arrive after emitting roughly 1.5kg of CO₂ one way. Or I could use Stride, the app my team at Penn Spark
          built to help people find faster, more sustainable ways to travel around Philadelphia.
        </p>

        <p>
          Stride suggests walking, biking, and SEPTA routes between locations, and lets users log trips to track their
          cumulative CO₂ savings. It also adds a social layer where users can compare impact with friends through
          leaderboards and activity tracking.
        </p>

        <p>
          As project manager, I interviewed stakeholders from the Delaware Valley Regional Planning Commission and the Clean Air Council.
          A consistent theme emerged: people often avoid sustainable transportation not because of inconvenience,
          but because of uncertainty—about safety, route familiarity, and overall experience.
        </p>

        <p>
          With those insights, I defined the MVP requirements for Stride:
        </p>

        <ul>
          <li>Find walking, biking, and SEPTA routes between two points.</li>
          <li>Preview routes using Street View to visualize the journey.</li>
          <li>Log selected routes as completed trips in a user profile.</li>
          <li>Track lifetime distance, time, and CO₂ emissions saved.</li>
          <li>Unlock achievements based on sustainability milestones.</li>
          <li>View friend leaderboards and compare CO₂ savings socially.</li>
        </ul>

        <p>
          The system was built with a React Native (Expo) frontend and a backend using Node.js, Express, DynamoDB, and Amazon S3.
          We integrated Google Maps Directions and Street View APIs, but cost constraints led us to use SerpAPI as an alternative
          interface for route data.
        </p>

        <p>
          After shipping the MVP, we presented to DVRPC, who suggested extending the product with social feeds,
          crowdsourced safety and accessibility reports, and integration with city services like Philly311 for reporting infrastructure issues.
        </p>

        <p>
          This was my first time managing a project end-to-end. I had to balance stakeholder input, technical constraints,
          and scope limitations within a two-month timeline. The experience reshaped how I think about engineering work—not just
          as implementation, but as coordination across design, systems, and real-world constraints.
        </p>

        <p>
          <strong><em>Thinking about Penn’s impact on Philadelphia</em></strong>
        </p>

        <p>
          As a teaching assistant for Access Engineering, I also spent time thinking about Penn’s relationship with Philadelphia
          and how student organizations engage with the surrounding community. Many students—including myself early on—don’t
          fully understand the structural impact universities have on local resources and access.
        </p>

        <p>
          As Vice President External of Penn Spark, I aimed to increase the club’s focus on community-oriented engineering projects.
          Stride became an early example of that direction, and it reinforced my interest in building technology that connects
          technical systems with measurable social impact.
        </p>

      </div>
    </ProjectLayout>
  );
}

export default ProjectStride;