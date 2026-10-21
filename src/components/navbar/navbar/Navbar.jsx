import React, { useEffect, useState } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  function showMenu() {
    setMenu(prevState => !prevState)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <a href="/" className="logo">CITIFI</a>
        <ul className='main-menu'>
            <CustomLink to='/what' className='link' >What we do</CustomLink>
            <CustomLink to='/who' className='link' >Who we are</CustomLink>
            <CustomLink to='/experience' className='link'>Our experience</CustomLink>
            <li><a href='https://www.linkedin.com/in/brendanmoffett/recent-activity/all/' className='link' target='_blank'>LinkedIn</a></li>
        </ul>

        <button className={`hamburger`} onClick={showMenu} name='hamburger'>
            <div className={`bar bar-top ${menu ? 'top-animate' : ''}`}></div>
            <div className={`bar bar-middle ${menu ? 'middle-animate' : ''}`}></div>
            <div className={`bar bar-bottom ${menu ? 'bottom-animate' : ''}`}></div>
        </button>

        <div className={`hamburger-menu ${menu ? 'show' : ''}`}>
            <CustomLink to='/what' className='link' onClick={showMenu}>What we do</CustomLink>
            <CustomLink to='/who' className='link' onClick={showMenu}>Who we are</CustomLink>
            <CustomLink to='/experience' className='link' onClick={showMenu}>Our experience</CustomLink>
            <li><a href='https://www.linkedin.com/in/brendanmoffett/recent-activity/all/' className='link' onClick={showMenu} target='_blank'>LinkedIn</a></li>
        </div>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar