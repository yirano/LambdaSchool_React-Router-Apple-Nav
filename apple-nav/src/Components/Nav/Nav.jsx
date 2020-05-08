import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/mac">Mac</NavLink>
        </li>
        <li>
          <NavLink to="/ipad">iPad</NavLink>
        </li>
        <li>
          <NavLink to="/iphone">iPhone</NavLink>
        </li>
        <li>
          <NavLink to="/watch">Watch</NavLink>
        </li>
        <li>
          <NavLink to="/tv">TV</NavLink>
        </li>
        <li>
          <NavLink to="/music">Music</NavLink>
        </li>
        <li>
          <NavLink to="/support">Support</NavLink>
        </li>
      </ul >
    </nav>

  )
}

export default Nav;