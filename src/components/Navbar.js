import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <h2 className="logo">Shopping cart</h2>
            <div className="links">
                <NavLink to='/' >Home</NavLink>
                <NavLink to='/cart' >My Cart</NavLink>
            </div>
        </div>
    )
}

export default Navbar;