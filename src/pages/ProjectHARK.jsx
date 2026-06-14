import './ProjectPage.css';

function ProjectHARK() {
  return (
    <div className="project-page">
      <div className="project-header">
        <h1>HARK Website Design</h1>
        <p className="project-meta">2023-2024 | Product Designer, Develop for Good</p>
        <div className="project-tags">
          <span className="tag">Figma</span>
          <span className="tag">Squarespace</span>
          <span className="tag">UX Design</span>
          <span className="tag">Branding</span>
        </div>
      </div>

      <div className="project-content">
        <section>
          <h2>Project Overview</h2>
          <p>
            Created website for HARK, a non-profit organization serving Historically Black Colleges in Louisiana, 
            Arkansas, and Texas, to host their 2024 virtual Southern Wit writers' conference.
          </p>
        </section>

        <section>
          <h2>My Contributions</h2>
          <ul>
            <li>Conducted UX surveys with stakeholders and target users</li>
            <li>Created comprehensive company branding guide</li>
            <li>Designed user flow for conference registration and participation</li>
            <li>Developed website mockups in Figma</li>
            <li>Implemented design in Squarespace</li>
          </ul>
        </section>

        <section>
          <h2>Impact</h2>
          <p>
            The website successfully supported HARK's 2024 virtual conference, providing an accessible platform 
            for writers from Historically Black Colleges to connect, share their work, and participate in workshops.
          </p>
        </section>

        <section>
          <h2>Project Links</h2>
          <div className="project-links">
            <a href="https://fossil-plastic-e89.notion.site/HARK-Technical-Documentation-10ee3c9334418054b702f03d62414044" 
               target="_blank" rel="noopener noreferrer" className="project-link">
              View Technical Documentation →
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProjectHARK;