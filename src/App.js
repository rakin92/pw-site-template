import React from 'react';
import './styles/Main.scss';

import Loader from './Component/Loader/Loader';
import Nav from './Component/Nav/Nav';

import Home from './Views/Home/Home';
import Blog from './Views/Blog/Blog';
import Contact from './Views/Contact/Contact';
import Portfolio from './Views/Portfolio/Portfolio';
import About from './Views/About/About';
import Resume from './Views/Resume/Resume';

export class App extends React.Component {
  state = {
    loading: false,
    showMenue: false,
    active: 'HOME',
  };

  toggleMenu = () => {
    const { showMenue } = this.state;
    this.setState({ showMenue: !showMenue });
  }

  setActiveMenue = (active) => this.setState({active, showMenue: false});

  renderSections = () => {
    const { active } = this.state;

    switch (active) {
      case 'HOME':
        return <Home />
      case 'ABOUT':
        return <About />
      case 'BLOG':
        return <Blog />
      case 'CONTACT':
        return <Contact />
      case 'PORTFOLIO':
        return <Portfolio />
      case 'RESUME':
        return <Resume />
      default:
        return <Home />
    }
  }

  render = () => {
    const { loading, showMenue } = this.state;

    return(
      <div className={showMenue ? 'show-menu' : 'hide-menu'}>
        {loading && <Loader />}

        <div className="bg"></div>

        <div className="main-content">
          <a href="#menu"
            onClick={this.toggleMenu}
            className="menu-btn"
          >
            <span className="lines">
              <span className="l1"></span>
              <span className="l2"></span>
              <span className="l3"></span>
            </span>
          </a>
          
          <Nav setActiveMenue={this.setActiveMenue} />
          {this.renderSections()}
        </div>
      </div>);
  };
}

export default App;
