import { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import "./Header.css";
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="Header">
            <div className="logoName">
                <Link to="/" className='link'>
                <img src={logo} width={100}/>
                <div className="name">White Harriers de Suresnes</div>
                </Link>
            </div>
            <div className="links">
                <div className="club"><Link to="/leclub/" className='link'>Le Club</Link></div>
                <div className="inscriptions"><Link to="/inscriptions/" className='link'>Les inscriptions</Link></div>
                <div className="actualites"><Link to="/actus/" className='link'>Actualités</Link></div>
            </div>
        </div>
    )
}

export default Header;