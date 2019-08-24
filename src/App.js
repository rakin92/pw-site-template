import React from 'react';

import Nav from './Component/Menu/Menu';
import MenuButton from './Component/MenuButton/MenuButton';
import './styles/Main.scss';

import Home from './Views/Home/Home';
import Blog from './Views/Blog/Blog';
import Contact from './Views/Contact/Contact';
import Portfolio from './Views/Portfolio/Portfolio';
import About from './Views/About/About';
import Resume from './Views/Resume/Resume';


export class App extends React.PureComponent {
  state = {
    showMenue: false,
    active: 'home'
  };

  toggleMenu = () => {
    const { showMenue } = this.state;
    this.setState({ showMenue: !showMenue });
  }

  renderSections = () => {
    const { active } = this.state;

    switch (active) {
      case 'home':
        return <Home />
      case 'about':
        return <About />
      case 'blog':
        return <Blog />
      case 'contact':
        return <Contact />
      case 'portfolio':
        return <Portfolio />
      case 'resume':
        return <Resume />
      default:
        return <Home />
    }
  }

  navigateTo = (active) => this.setState({active, showMenue: false});

  render = () => {
    const { showMenue } = this.state;

    return(
      <div className={showMenue ? 'show-menu' : 'hide-menu'}>

        <div className="bg"></div>

        <div className="main-content">
          <MenuButton toggleMenu={this.toggleMenu} />
          
          <Nav navigateTo={this.navigateTo} />
          
          {this.renderSections()}

        </div>
      </div>);
  };
}

export default App;
