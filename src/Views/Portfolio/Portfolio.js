import React from 'react';
import Filter from './Filter';
import Projects from './Projects';
import Popup from './Popup';

import Image1 from './img/1.jpg';

const PROJECTS = [
  { id: 0, title: 'Some Title', description: 'Some description', image: Image1, type: ['WEB'] },
  { id: 1, title: 'Some Title', description: 'Some description', image: Image1, type: ['WEB'] },
  { id: 2, title: 'Some Title', description: 'Some description', image: Image1, type: ['APP'] },
  { id: 3, title: 'Some Title', description: 'Some description', image: Image1, type: ['APP'] },
  { id: 4, title: 'Some Title', description: 'Some description', image: Image1, type: ['WEB', 'APP'] },
];

class Portfolio extends React.PureComponent {

  state = {
    showPopup: false,
    project: {},
    filters: [
      { id: 0, name: 'APP', active: true },
      { id: 1, name: 'WEB', active: true },
    ],
    projects: PROJECTS,
  };

  filterToggle = async (id) => {
    let { filters } = this.state;

    filters = await filters.map((filter) => {
      if (filter.id === id) {
        filter.active = !filter.active;
      }
      return filter;
    });

    const projects = await PROJECTS.filter((project) => {
      const active = filters.map(filter => filter.active ? filter.name : '');
      return active.some(r => project.type.includes(r));
    });

    this.setState({ filters, projects });
  };

  projectToggle = (project) => {
    this.setState({ showPopup: true, project });
  };

  onClose = () => {
    this.setState({ showPopup: false, project: {} });
  };

  render = () => {
    const { filters, projects, showPopup, project } = this.state;

    return (
      <section id="portfolio" className="section portfolio-section active">
        <div className="container-fluid">

          <div className="block portfolio-block">

            <div className="section-header">
              <h2>Portfolio</h2>
              <p>See my latest projects I"ve been working on</p>
            </div>
            
            <Filter filterList={filters} filterToggle={this.filterToggle} ref={this.element}/>
            <Projects projectList={projects} projectToggle={this.projectToggle}/>
            <Popup show={showPopup} onClose={this.onClose} project={project}/>

          </div>

        </div>
      </section>
    );
  };
};

export default Portfolio;
