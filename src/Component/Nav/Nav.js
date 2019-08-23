import React from 'react';

const NavItems = [
  { label: 'Home', icon: 'ion-ios-home-outline', value: 'home' },
  { label: 'About', icon: 'ion-ios-person-outline', value: 'about' },
  { label: 'Resume', icon: 'ion-ios-briefcase-outline', value: 'resume' },
  { label: 'Portfolio', icon: 'ion-ios-albums-outline', value: 'portfolio' },
  { label: 'Blog', icon: 'ion-ios-book-outline', value: 'blog' },
  { label: 'Contact', icon: 'ion-ios-email-outline', value: 'contact' },
]

function Nav() {
  const menu = NavItems.map((item, index) => (
    <li key={index}>
      <a href={`/${item.value}`}>
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