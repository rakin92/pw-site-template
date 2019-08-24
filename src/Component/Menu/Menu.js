import React from 'react';

import './Menu.scss';

const NavItems = [
  { label: 'Home', icon: 'ion-ios-home-outline', value: 'home' },
  { label: 'About', icon: 'ion-ios-person-outline', value: 'about' },
  { label: 'Resume', icon: 'ion-ios-briefcase-outline', value: 'resume' },
  { label: 'Portfolio', icon: 'ion-ios-albums-outline', value: 'portfolio' },
  { label: 'Blog', icon: 'ion-ios-book-outline', value: 'blog' },
  { label: 'Contact', icon: 'ion-ios-email-outline', value: 'contact' },
]

function Menu({ navigateTo }) {
  const menu = NavItems.map((item, index) => (
    <li key={index}>
      <button aria-label={item.value} onClick={() => navigateTo(item.value)}>
        <i className={item.icon}></i>
        <span>{item.label}</span>
      </button>
    </li>
  ))

  return (
    <div className="menu">
      <nav className="menu-items">
        <ul>
          {menu}
        </ul>
      </nav>
    </div>
  );
}

export default Menu;