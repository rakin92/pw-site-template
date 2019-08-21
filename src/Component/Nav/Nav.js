import React from 'react';

const NavItems = [
  { label: 'Home', icon: 'ion-ios-home-outline', value: 'HOME' },
  { label: 'About', icon: 'ion-ios-person-outline', value: 'ABOUT' },
  { label: 'Resume', icon: 'ion-ios-book-outline', value: 'RESUME' },
  { label: 'Portfolio', icon: 'ion-ios-briefcase-outline', value: 'PORTFOLIO' },
  { label: 'Blog', icon: 'icon-basic-sheet-txt', value: 'BLOG' },
  { label: 'Contact', icon: 'ion-ios-email-outline', value: 'CONTACT' },
]

function Nav({setActiveMenue}) {
  const menu = NavItems.map((item, index) => (
    <li key={index}>
      <a href={`#${item.value}`} onClick={() => setActiveMenue(item.value)}>
        <i className={item.icon}></i>
        <span>{item.label}</span>
      </a>
    </li>
  ))

  return (
    <div className='menu'>
      <nav className='menu-items'>
        <ul>
          {menu}
        </ul>
      </nav>
    </div>
  );
}

export default Nav;