import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className='mx-5'>

<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <ul className="menu menu-vertical px-1">
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Education</a></li>
      <li><a>Project</a></li>
      <li><a>Contact</a></li>
    
      
    </ul>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Jeffrey.</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a href='/' spy={true} smooth={true} duration={500}  >Home</a></li>
      <li><a href='#about'spy={true} smooth={true} duration={500} >About</a></li>
      <li><a href='#education'>Education</a></li>
      <li><a href='#project'>Project</a></li>
      <li><a href='#contact'>Contact</a></li>
    
      
    </ul>
  </div>
  
</div>
    </div>
  )
}

export default Navbar