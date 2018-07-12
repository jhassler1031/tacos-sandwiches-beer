import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <button><NavLink to='/'>Home</NavLink></button>
      <button><NavLink to='/John'>John's Page</NavLink></button>
      {/* <button><NavLink >Kevin's Page</NavLink></button> */}
      {/* <button><NavLink >Zach's Page</NavLink></button> */}
    </nav>
  );
}

export default Header;
