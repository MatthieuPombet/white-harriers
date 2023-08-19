import { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import "./Header.css";
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="Header">
            <div className="logoName">
                <Link to="/">
                <img src={logo} width={100}/>
                <div className="name">White Harriers de Suresnes</div>
                </Link>
            </div>
            <div className="links">
                <div className="club"><Link to="/leclub/">Le Club</Link></div>
                <div className="inscriptions"><Link to="/inscriptions/">Les inscriptions</Link></div>
                <div className="actu">Actualités</div>
            </div>
        </div>
    )
}

export default Header;