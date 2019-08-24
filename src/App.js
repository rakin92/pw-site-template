import React from 'react';

import Nav from './Component/Menu/Menu';
import MenuButton from './Component/MenuButton/MenuButton';
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
          <MenuButton toggleMenu={this.toggleMenu} />
          
          <Nav setActiveMenue={this.setActiveMenue} />
          
          <Routes />

        </div>
      </div>);
  };
}

export default App;
