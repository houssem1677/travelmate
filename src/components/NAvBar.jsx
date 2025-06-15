import { Link } from "react-router-dom";
import React from 'react';
import "../css/NavBar.css"


function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">TravelMate Uk
            <Link to="/"></Link>
        </div>
        <div className="navbar-links">
            <Link to="/bookings" className="nav-link">📅Book</Link>
            <Link to="/Discover" className="nav-link">✨Discover</Link>
            <Link to="/trains" className="nav-link">🚄 Trains</Link>
            <Link to="/Emergency" className="nav-link"> 🚨 Emergency</Link>
        </div>
    </nav>
}
export default NavBar