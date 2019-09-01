import React from 'react';

import Filter from './Filter';
import Projects from './Projects';
import Popup from './Popup';
import lambdaImg from './img/awslambda.jpg';
import golangImg from './img/golang.jpg';
import pythonImg from './img/python.jpg';
import reactjsImg from './img/reactjs.jpg';
import dockerImg from './img/docker.jpg';
import kubeImg from './img/kube.jpg';
import './Portfolio.scss';


const PROJECTS = [
  { id: 0, title: 'Progressive React App', description: 'Its the source code to this progressive web app. Built with JS, ReactJS, and Workbox.', image: reactjsImg, type: ['JS'], github: 'https://github.com/rakin92/pwa-react-app', demo: 'https://rakin92.github.io/pwa-react-app/' },
  { id: 1, title: 'Go & GQL', description: 'A simple starter api service built with GoLang, GraphQL (go-graphql), Postgres and GORM. It supports JWT authentication.', image: golangImg, type: ['GO'], github: 'https://github.com/rakin92/go-gql-starter' },
  { id: 2, title: 'AWS SAM CLI', description: 'An AWS Lambda starter kit to handle aws events built with sam-cli in go.', image: lambdaImg, type: ['GO'], github: 'https://github.com/rakin92/go-sam-lambda-starter' },
  { id: 3, title: 'Pyhon BDD', description: 'A Bevior Driven Testing starter kit built with behave, python and selinium.', image: pythonImg, type: ['PYTHON'], github: 'https://github.com/rakin92/python-cucumber-bdt' },
  { id: 4, title: 'Docker Starter', description: 'Some quick docker samples for your everyday projects started.', image: dockerImg, type: ['DEVOPS', 'GO', 'JS'], github: 'https://github.com/rakin92/docker-starter' },
  { id: 5, title: 'Kubernetes Starter', description: 'Some quick kubernetes samples get your projects out to production.', image: kubeImg, type: ['DEVOPS'], github: 'https://github.com/rakin92/kube-starter' },
  // { id: 6, title: 'Weather App', description: 'A simple weather app built using Open Weather Map api and javascript.', image: reactjsImg, type: ['JS'], github: 'https://github.com/rakin92/weatherapp' },
  { id: 6, title: 'Apollo React Starter', description: 'Simple Apollo React start kit to provide you with quick setup with your graphql & restful service.', image: reactjsImg, type: ['JS'], github: 'https://github.com/rakin92/apollo-react-starter', demo: 'https://rakin92.github.io/pwa-react-app/' },
  { id: 7, title: 'GoLang BDD', description: 'A Bevior Driven Testing starter kit built with go, and godog by DATA-DOG.', image: golangImg, type: ['GO'], github: 'https://github.com/rakin92/go-bdd-starter' },
  { id: 8, title: 'Progressive Web AMP', description: 'This is a progressive web amp for my blog pages.', image: reactjsImg, type: ['JS'], github: 'https://github.com/rakin92/pw-amp-blog-starter', demo: 'https://rakin-blog.firebaseapp.com/' },
];

class Portfolio extends React.PureComponent {

  state = {
    showPopup: false,
    project: {},
    filters: [
      { id: 0, name: 'GO', active: true },
      { id: 1, name: 'JS', active: true },
      { id: 2, name: 'PYTHON', active: true },
      { id: 3, name: 'DEVOPS', active: true },
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

  projectToggle = project =>
    this.setState({ showPopup: true, project });

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
