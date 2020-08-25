import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Video Games</Link>
        <div className="collpase naavbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Game List</Link>
            </li>
            <li className="nav-item">
              <Link to="/collection" className="nav-link">Game Collection</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar
