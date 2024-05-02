import React, { useState } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import './navbar.css'
import LOGO from '../../../assets/citifi-logo-minimal.png'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  function showMenu() {
    setMenu(prevState => !prevState)
  }


  return (
    <nav className='nav'>
        <Link to='/' className='site-title'>
            <img src={LOGO} alt='citifi logo' className='logo'/>
        </Link>
        <ul className='main-menu'>
            <CustomLink to='/what' className='link' >What we do</CustomLink>
            <CustomLink to='/who' className='link' >Who we are</CustomLink>
        </ul>

        <button className={`hamburger`} onClick={showMenu} name='hamburger'>
            <div className={`bar bar-top ${menu ? 'top-animate' : ''}`}></div>
            <div className={`bar bar-middle ${menu ? 'middle-animate' : ''}`}></div>
            <div className={`bar bar-bottom ${menu ? 'bottom-animate' : ''}`}></div>
        </button>

        <div className={`hamburger-menu ${menu ? 'show' : ''}`}>
            <CustomLink to='/what' className='link' onClick={showMenu}>What we do</CustomLink>
            <CustomLink to='/who' className='link' onClick={showMenu}>Who we are</CustomLink>
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