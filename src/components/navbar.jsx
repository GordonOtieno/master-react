import React, { Component } from 'react'
//stateless functional component
const  Navbar = ({totalCounters})=>  {
    
        return (
        <nav className="navbar bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <span className='badge badge-pill badge-secondary'>{totalCounters}</span>
        </div>
        </nav>
        );
    
}
 
export default Navbar;