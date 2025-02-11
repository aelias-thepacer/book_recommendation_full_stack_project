import { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";
import '../assets/css/Navbar.css'
import logo from '../assets/imgs/logo.jpeg'
const Navbar = () => {
  const locationNav = useLocation();
  // Active nav link, if so, change the link based the page location.
  const [location, setLocation] = useState<string>(locationNav.pathname);

  useEffect((): void => {
    setLocation(locationNav.pathname)
  }, [locationNav.pathname])

  return (
    // Title, Books, Libraries, Login/Sign Up, ErrorPage  
    <div className="nav">
      {/* Container */}
      <div className="nav-container">
        {/* LOGO */}
        <h2 className="logo">
          <Link to="/">BOOK <img className='logoimg' src={logo} alt='Book Beacon Logo' />BEACON</Link>
        </h2>
        {/* Navigation Links */}
        <div className="nav-links">
          <Link to='/books' className={location === '/books' ? 'activeNav' : ''}>
            BOOKS
          </Link>
          <Link to='/libraries' className={location === '/libraries' ? 'activeNav' : ''}>
            LIBRARIES
          </Link>
          <Link to='/login' className={location === '/login' ? 'activeNav' : ''} >
            LOGIN/SIGN UP
          </Link>

        </div>

      </div>
    </div>
  )
}

export default Navbar;
