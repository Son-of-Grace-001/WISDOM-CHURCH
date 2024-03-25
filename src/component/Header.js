// import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import logo from './picture/logo.jpg';
import './css/Nav.css';
import { IoIosArrowDown, IoIosMenu, IoIosClose } from "react-icons/io";

export const Header = () => {
  // State to manage the visibility of dropdown menus
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isEventDropdownOpen, setIsEventDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCollectionDropdownOpen, setIsCollectionDropdownOpen] = useState(false);

  // Function to toggle the visibility of the About dropdown
  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  // Function to toggle the visibility of the Event dropdown
  const toggleCollectionDropdown = () => {
    setIsCollectionDropdownOpen(!isCollectionDropdownOpen);
  };

  const toggleEventDropdown = () => {
    setIsEventDropdownOpen(!isEventDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    const navOptions = document.querySelector('.nav-options');
    if (navOptions){
      navOptions.style.display = isMenuOpen ? 'none' : 'block'
    }
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    const navOptions = document.querySelector('.nav-options');
    if (navOptions){
      navOptions.style.display = 'none'
    }
  }

  return (
    <nav>
      <div className='nav-cont'>
        <div className='right-nav'>
          <img className='logo' src={logo} alt='chapel logo'/>
          <h3 className='chapel-name'>Wisdom Chapel</h3>
        </div>

        <div className='other-part'>
          <ul className="nav-options">
            <a href='/'><li className='nav-item'>Home</li></a>
            <li className='nav-item'>
              About Us 
              <IoIosArrowDown
                role='button'
                className='down-arrow'
                onClick={toggleAboutDropdown}
              />
              {isAboutDropdownOpen && (
                <ul className='dropdown'>
                  <a href='#about-us' className='link'><li className='dropdown-option'> Our History</li></a>
                  <hr/>
                  <a href='#about-us' className='link'><li className='dropdown-option'> Our Vision</li></a>
                  <hr/>
                  <a href='#about-us' className='link'><li className='dropdown-option'> Our Mission</li></a>
                  <hr/>
                  <a href='#about-us' className='link'><li className='dropdown-option'> Our Pastor</li></a>
                </ul>
              )}
            </li>
            <li className='nav-item'>
              News & Event
              <IoIosArrowDown
                role='button'
                className='down-arrow'
                onClick={toggleEventDropdown}
              />
              {isEventDropdownOpen && (
                <ul className='dropdown2'>
                  <a href='#upcoming'><li className='dropdown-option2'>Upcoming Event</li></a>
                  <hr/>
                  <li className='dropdown-option2'> Gallery</li>
                </ul>
              )}
            </li>
            <li className='nav-item'>
              Collection
              <IoIosArrowDown
                role='button'
                className='down-arrow'
                onClick={toggleCollectionDropdown}
              />
              {isCollectionDropdownOpen && (
                <ul className='dropdown3'>
                  <li className='dropdown-option3'>Offering</li>
                  <hr/>
                  <li className='dropdown-option3'> Tithe</li>
                </ul>
              )}
            </li>
            <a href='#contact'><li className='nav-item'>Contact Us</li></a>
            <a href='#service'><li className='nav-item'>Service</li></a>
          </ul>
        </div>
        <div className='div'>
          {isMenuOpen ? (
            <IoIosClose className='close'
              role='button'
              style={{
                fontSize: '40px'
              }}
              onClick={closeMenu}
            />
          ):(
            <IoIosMenu className='menu'
              role='button'
              style={{
                fontSize: '40px'
              }}
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>
    </nav>
  );
};
