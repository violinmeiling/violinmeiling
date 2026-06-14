import './ProjectPage.css';

function ProjectBlue() {
  return (
    <div className="project-page">
      <div className="project-header">
        <h1>Penn Museum: Into the Blue</h1>
        <p className="project-meta">2025 | Penn Spark Spring 2025 Showcase</p>
        <div className="project-tags">
          <span className="tag">Next.js</span>
          <span className="tag">React</span>
          <span className="tag">Computer Vision</span>
        </div>
      </div>

      <div className="project-content">
        <section>
          <h2>Overview</h2>
          <p>
            A companion app to Penn Museum's "Into the Blue" Student Exhibition to guide visitors around the use 
            of the color blue in artifacts throughout history. Used NextJS to develop a camera capture to turn 
            pictures of blue objects into stickers, as well as a stickerboard feature for users to arrange their 
            collected stickers into their own exportable board.
          </p>
          <p>
            The exhibit will run from 2025 to 2026 and is projected to reach over 1000 museum visitors.
          </p>
        </section>

        <section>
          <h2>Project Links</h2>
          <div className="project-links">
            <a href="https://penn.museum/sites/blue/" target="_blank" rel="noopener noreferrer" className="project-link">
              Visit Penn Museum Exhibit →
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProjectBlue;