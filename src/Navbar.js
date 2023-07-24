import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div>
            <nav className='navbar navbar-expand-lg bg-dark navbar-dark'>
                <div className='container-fluid'> 
                    <Link className='navbar-brand'to='/'>
                        <img src='https://img.freepik.com/premium-vector/burger-vintage-style-logo-fast-food-restaurant_605910-262.jpg' alt='LOADING' height="50 px"></img>
                         BURGER LOUNGE
                    </Link>
                    <ul className='nav nav-underline'>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/">Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/contact">Menu</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </>
  )
}

export default Navbar