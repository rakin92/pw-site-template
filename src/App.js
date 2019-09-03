import React from 'react';

import Nav from './Component/Menu/Menu';
import MenuButton from './Component/MenuButton/MenuButton';
import './Styles/Main.scss';

import Home from './Views/Home/Home';
import Blog from './Views/Blog/Blog';
import Contact from './Views/Contact/Contact';
import Portfolio from './Views/Portfolio/Portfolio';
import About from './Views/About/About';
import Resume from './Views/Resume/Resume';


export class App extends React.PureComponent {
  state = {
    menuStatus: 'hide',
    active: 'home',
  };

  toggleMenu = () => {
    const { menuStatus } = this.state;

    this.setState({ menuStatus: menuStatus === 'hide' ? 'show' : 'hide' });
  }

  renderSections = () => {
    const { active } = this.state;

    switch (active) {
      case 'home':
        return <Home redirect={this.navigateTo}/>
      case 'about':
        return <About />
      case 'resume':
        return <Resume />
      case 'portfolio':
        return <Portfolio />
      case 'blog':
        return <Blog />
      case 'contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  navigateTo = (active) => this.setState({ active, menuStatus: 'hide'});

  render = () => {
    const { menuStatus } = this.state;

    return(
      <div className={`${menuStatus}-menu`}>

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
