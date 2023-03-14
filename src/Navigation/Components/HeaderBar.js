import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';


import './HeaderBar.css';
import MenuItems from './MenuItems';

const HeaderBar = () => {
    return (
        <header className="header-bar">
            <div className='left-header-menu'>
                <div className='header-bar-image'>
                    <Link to="/">
                        <img src={logo} alt='logo' />
                    </Link>
                </div>
                
                <h1 className="header-bar-company-name">
                <Link to="/">
                    Feather
                    </Link>
                </h1>
            </div>
            <div className='right-header-menu'>
                <nav>
                    <MenuItems />
                </nav>
            </div>
        </header>
    );
}

export default HeaderBar