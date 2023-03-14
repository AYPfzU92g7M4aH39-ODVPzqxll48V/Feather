import React from 'react'
import { NavLink } from 'react-router-dom'

import './MenuItems.css';

const MenuItems = () => {
  return (
    <ul className="menu-links">
        <li>
            <NavLink to="/track">
                Track
            </NavLink>
        </li>
        <li>
            <NavLink to= "./Dashboards/Rateship/Rateship">
                Rate&Ship
            </NavLink>
        </li>
        
        <li>
            <NavLink to="/track">
                AboutUs
            </NavLink>
        </li>
        <li>
            <NavLink to="/login">
                Login/Signup
            </NavLink>
        </li>
    </ul>
  )
}

export default MenuItems