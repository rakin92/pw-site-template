import React from 'react';

import Nav from './Component/Nav/Nav';
import Routes from './Routes';

import './styles/Main.scss';

export class App extends React.PureComponent {
  state = {
    showMenue: false,
  };

  toggleMenu = () => {
    const { showMenue } = this.state;
    this.setState({ showMenue: !showMenue });
  }

  setActiveMenue = (active) => this.setState({active, showMenue: false});

  render = () => {
    const { showMenue } = this.state;

    return(
      <div className={showMenue ? 'show-menu' : 'hide-menu'}>

        <div className="bg"></div>

        <div className="main-content">
          <button
            onClick={this.toggleMenu}
            className="menu-btn"
            aria-label="Menu"
          >
            <span className="lines">
              <span className="l1"></span>
              <span className="l2"></span>
              <span className="l3"></span>
            </span>
          </button>
          
          <Nav setActiveMenue={this.setActiveMenue} />
          
          <Routes />

        </div>
      </div>);
  };
}

export default App;
