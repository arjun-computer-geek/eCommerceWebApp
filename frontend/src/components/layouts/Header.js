import React, { useEffect, useRef } from 'react'
import{ Route } from 'react-router-dom'
import Search from './Search'

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
                        <Route render={({history}) => <Search history={history} />} />
                    </li>
                    </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}


export default Header
