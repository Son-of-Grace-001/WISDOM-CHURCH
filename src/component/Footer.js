import React from 'react'
import './css/Nav.css'
// import { FaFacebook } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div>
      <div className="container2">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
            <li className="nav-item"><a href="#about-us" className="nav-link px-2 text-muted">About US</a></li>
            <li className="nav-item"><a href="#upcoming" className="nav-link px-2 text-muted">Event</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link px-2 text-muted">Contact Us</a></li>
            <li className="nav-item"><a href="https://adelekeuniversity.edu.ng/" target='blank' className="nav-link px-2 text-muted">Service</a></li>
          </ul>
          <p className="text-center text-muted">&copy; 2024 Company, Inc, developed by Olajire Stephen</p>
        </footer>
      </div>
    </div>
  )
}
