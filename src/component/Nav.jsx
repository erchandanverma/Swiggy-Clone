import React from 'react';
import Logo from '../assets/logo.png'; 
import './Nav.css'; 

const Nav = () => {
  const NavData = [
    { id: 1, name: 'Swiggy Corporate', icon: 'fas fa-building' },
    { id: 2, name: 'Search', icon: 'fas fa-search' },
    { id: 3, name: 'Offer', icon: 'fas fa-gift' },
    { id: 4, name: 'Help', icon: 'fas fa-question-circle' },
    { id: 5, name: 'Signin', icon: 'fas fa-sign-in-alt' },
    { id: 6, name: 'Cart', icon: 'fas fa-shopping-cart' },
  ];

  return (
    <nav className="navbar container-fluid p-5 row">
      <div className="navbar-left col-lg-6 col-md-12 d-flex align-items-center">
        <img src={Logo} alt="Swiggy Logo" className="navbar-logo mx-2" />
        <p className="dropdown-indicator">
          Other <i className="fa-solid fa-angle-down" style={{ color: "orange" }}></i>
        </p>
      </div>
      <div className="navbar-right col-lg-6 col-md-12">
        <ul className="navbar-links d-flex list-unstyled">
          {NavData.map((item) => (
            <li key={item.id} className="nav-item mx-2">
              <a href="#" className="nav-link">
                <i className={item.icon}></i> <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
