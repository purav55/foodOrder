import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='main-navbar'>
        <div className='nav-links'>
            <div>
        <img  src='/assets/image/icons8-duolingo-logo-100.svg' alt='Logo'/>
        </div>
        <div className='links-category'>
            <div><Link to="/">RESTRO</Link></div>
            <div><Link to="#">BAR</Link></div>
            <div><Link to="#">CAFETERIA</Link></div>
        </div>
        <div>
        <img src="https://img.icons8.com/clouds/100/undefined/shopping-cart-promotion.png" alt='cart'/>
        </div>
        </div>
    </div>
  )
}

export default Navbar