// src/components/ProjectCard.jsx
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card-luxury">
      <div className="project-card-image-luxury">
        <img
          src={project.imageUrl}
          alt={project.title}
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800';
          }}
        />
        <div className="project-card-overlay-luxury">
          <span className="project-card-category-luxury">{project.category}</span>
        </div>
        <div className="project-card-hover-luxury">
          <span className="project-card-view-luxury">View Project</span>
        </div>
      </div>
      <div className="project-card-body-luxury">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-card-line-luxury" />
      </div>
    </div>
  );
};

export default ProjectCard;