import React from 'react';
import Logo from '../assets/logo.png'; // Ensure the logo path is correct
import './Nav.css'; // Ensure styles are defined here

const Nav = () => {
  const NavData = [
    {
      id: 1,
      name: 'Swiggy Corporate',
      icon: 'fas fa-building',
    },
    {
      id: 2,
      name: 'Search',
      icon: 'fas fa-search',
    },
    {
      id: 3,
      name: 'Offer',
      icon: 'fas fa-gift',
    },
    {
      id: 4,
      name: 'Help',
      icon: 'fas fa-question-circle',
    },
    {
      id: 5,
      name: 'Signin',
      icon: 'fas fa-sign-in-alt',
    },
    {
      id: 6,
      name: 'Cart',
      icon: 'fas fa-shopping-cart',
    },
  ];

  return (
    <nav className="navbar container-fluid p-5">
      <div className="navbar-left">
        <img src={Logo} alt="Logo" className="navbar-logo" />
        <p style={{textDecoration:"underline"}}>Other <i className="fa-solid fa-angle-down" style={{color:"orange"}}></i></p>
      </div>
      <div className="navbar-right">
        <ul className="navbar-links">
          {NavData.map((item) => (
            <li key={item.id} className="nav-item">
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
