import React from 'react';

import './MenuButton.scss';

const MenuButton = ({ toggleMenu }) => (
  <button
    onClick={toggleMenu}
    className="menu-btn"
    aria-label="Menu"
  >
    <span className="lines">
      <span className="l1"></span>
      <span className="l2"></span>
      <span className="l3"></span>
    </span>
  </button>
);

export default MenuButton;