import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Book Store</div>
      <div className="navbar-links">
        <NavLink to="/" className="nav-link" end>
          Home
        </NavLink>
        <NavLink to="/browser" className="nav-link">
          Browser
        </NavLink>
        <NavLink to="/add-book" className="nav-link">
          Add Book
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
