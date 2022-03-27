import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header__container'>
      <Link to='/'>
        <div className='header__logo'>Movie</div>
      </Link>
      <div className='header__profile'></div>
    </header>
  )
}

export default Header
