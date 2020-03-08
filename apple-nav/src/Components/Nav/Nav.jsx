import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom'

// const NavWrapper = styled.ul`
//   display: flex;
//   list-style-type: none;
//   justify-content: space-evenly;
//   padding: 0;
//   background: #333333;
//   color: #B3B3B3;
// `
const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className="styledNav" to="">Mac</NavLink>
        </li>
        <li>
          <NavLink to="">iPad</NavLink>
        </li>
        <li>
          <NavLink to="">iPhone</NavLink>
        </li>
        <li>
          <NavLink to="">Watch</NavLink>
        </li>
        <li>
          <NavLink to="">TV</NavLink>
        </li>
        <li>
          <NavLink to="">Music</NavLink>
        </li>
        <li>
          <NavLink to="">Support</NavLink>
        </li>
      </ul >
    </nav>

  )
}

export default Nav;