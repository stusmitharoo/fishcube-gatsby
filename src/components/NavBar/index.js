import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

const NavBar = ({ toggleNavbar, isActive, logo }) => (
  <StaticQuery
    query={graphql`
            query SearchIndexQuery {
                siteSearchIndex {
                    index
                }
            }
        `}
    render={data => (
      <nav className='navbar is-fixed-top' aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
            <img alt='logo' src={logo} />
            <strong className='has-margin-left-20'>Fishcube</strong>
          </Link>
          <button
            className={`button navbar-burger ${isActive ? 'is-active' : ''}`}
            data-target='navMenu'
            onClick={toggleNavbar}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} id='navMenu'>

          <div className='navbar-end'>
            <Link className='navbar-item' to='/pricing'>
              Pricing
            </Link>
            <a className='navbar-item' href='https://app.fishcube.co.uk/auth'>
              Login
            </a>
          </div>
        </div>
      </nav>
    )}
  />
)

export default NavBar
