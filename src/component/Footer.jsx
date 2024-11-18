import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <>
  <footer className="footer">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-3 mb-3">
        <div className="footer-logo">Swiggy</div>
        <p className="text-muted">© 2024 Swiggy Limited</p>
      </div>

      <div className="col-md-2 mb-3 footer-section">
        <h5>Company</h5>
        <a href="#">About Us</a><br/>
        <a href="#">Swiggy Corporate</a>
      </div>

      <div className="col-md-2 mb-3 footer-section">
        <h5>Contact Us</h5>
        <a href="#">Help & Support</a><br/>
        <a href="#">Partner with Us</a>
      </div>

      <div className="col-md-2 mb-3 footer-section">
        <h5>Available in</h5>
        <a href="#">Bangalore</a><br/>
        <a href="#">Gurgaon</a>
      </div>

      <div className="col-md-3 mb-3 footer-section">
        <h5>Life at Swiggy</h5>
        <a href="#">Explore with Swiggy</a><br/>
        <a href="#">Swiggy News</a>
      </div>
    </div>
  </div>
</footer>
</>

  )
}

export default Footer