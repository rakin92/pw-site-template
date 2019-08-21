import React from 'react';

function Projects({ projectList, projectToggle }) {
  const projects = projectList.map((project, index) => (
    <li key={index} className="project-item">
      <div className="inner">

        <img src={project.image} alt="" />

        <div className="overlay">

          <a href={`#popup-${project.id}`}
            className="has-popup view-project"
            onClick={() => projectToggle(project)}
          >
            view project
          </a>

        </div>

      </div>
    </li>
  ));

  return(
    <ul className="project-items">
      {projects}
    </ul>

  );
}

export default Projects;
