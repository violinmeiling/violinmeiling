import { Link } from 'react-router-dom';
import './ProjectCard.css';
import { saveScroll } from "./scrollMemory";

function ProjectCard({ project }) {
  if (project.external || project.externalLink) {
    return (
      <a
        href={project.externalLink || project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card project-card-link"
        onClick={() => saveScroll('/')}
      >
        <div className="project-header-row">
          <h3>{project.title}</h3>
          <span className="project-year">{project.year}</span>
        </div>

        {project.award && <p className="project-award">{project.award}</p>}

        <div className="tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>

        <p className="excerpt">{project.excerpt}</p>
        <span className="details-link">View project →</span>
      </a>
    );
  }

  return (
    <Link
      to={project.link}
      className="project-card project-card-link"
      onClick={() => saveScroll(project.link)}
    >
      <div className="project-header-row">
        <h3>{project.title}</h3>
        <span className="project-year">{project.year}</span>
      </div>

      {project.award && <p className="project-award">{project.award}</p>}

      <div className="tags">
        {project.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>

      <p className="excerpt">{project.excerpt}</p>
      <span className="details-link">Read more →</span>
    </Link>
  );
}

export default ProjectCard;