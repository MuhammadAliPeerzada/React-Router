import React from 'react'
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">CARS </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Ford</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="card2">BMW</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="card3">Porche</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">Ford</Link></li>
            <li><Link className="dropdown-item" to="card2">BMW</Link></li>
            
            <li><Link className="dropdown-item" to="card3">Porche</Link></li>
          </ul>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar