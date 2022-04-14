import React from "react";

import { Link } from 'react-router-dom';

// import logo from '../../assets/logos/miu-logo.png';

import './Header.css'

const Header = () => {

    return (
        <header>
            <nav>
                {/* <img width="300" height="100" src={logo} alt="Logo" /> */}
                <ul>
                    <li><Link to="/products"> Products</Link></li> 
                    <li><Link to="/create-product"> New Product</Link></li>
                </ul>
            </nav>
        </header>
    );
}



export default Header;