import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav className='headerNav'>
      <button><NavLink to='/'>Home</NavLink></button>
      <button><NavLink to='/John'>John's Page</NavLink></button>
      <button><NavLink to='/Kevin'>Kevin's Page</NavLink></button>
      <button><NavLink to='/Zach'>Zach's Page</NavLink></button>
    </nav>
  );
}

export default Header;
