import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoMenuSharp, IoCloseOutline } from 'react-icons/io5';

// import NavLinks from './navMenu';

import './newNavbarstyles.css';
const NewNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`site-nav ${menuOpen ? 'is-menu-open' : ''}`}
        aria-label='Primary'
      >
        <div className='navbar-inner-container'>
          <Link className='logo-container' to='/' onClick={closeMenu}>
            <p>T R A N S P O R T E</p>
            <p>R I C O - H N O S</p>
          </Link>

          <button
            type='button'
            className='nav__menu'
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls='primary-navigation'
          >
            {menuOpen ? (
              <IoCloseOutline className='nav__menu__icon' />
            ) : (
              <IoMenuSharp className='nav__menu__icon' />
            )}
          </button>

          <div
            id='primary-navigation'
            className={`navbar-links ${menuOpen ? 'is-open' : ''}`}
          >
            <ul>
              <li>
                <NavLink
                  to='/'
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? 'nav-link is-active' : 'nav-link'
                  }
                >
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/trucks'
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? 'nav-link is-active' : 'nav-link'
                  }
                >
                  Nuestros Camiones
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/about-section'
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? 'nav-link is-active' : 'nav-link'
                  }
                >
                  Sobre Nosotros
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/contact'
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? 'nav-link is-active' : 'nav-link'
                  }
                >
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NewNavbar;
