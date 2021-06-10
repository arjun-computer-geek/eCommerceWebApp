import React, { useEffect, useRef } from 'react'

const Header = () => {
    
    
    return (
        <div className="header">
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <a href="index.html"><img src="images/logo.png" alt="logo" width="400px" height="80px"/></a>
                    </div>
                    <nav>
                        {/* <ul ref={menuItems}> */}
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="products.html">Products</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="account.html">Account</a></li>
                    <li>    
                    <a href="cart.html"><img src="images/cart.svg" alt="" width="30px" height="30px"/></a>
                    <img className="menu-icon" src="images/menu.png" alt="mneu" width="30px" height="30px" />
                    </li>
                    <li>
                    <div className="search-box">
                        <input className='search-text' type="text" placeholder="Type to search"/>
                        <a className="search-btn" href="#">
                            <i className="fa fa-search"></i>
                        </a>
                    </div>
                    </li>
                    </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}


export default Header
