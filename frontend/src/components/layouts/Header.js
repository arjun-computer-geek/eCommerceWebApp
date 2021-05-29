import React from 'react'

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <a href="index.html"><img src="images/logo.png" alt="logo" width="400px" height="80px"/></a>
                    </div>
                    <nav>
                        <ul id="menuItems">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="products.html">Products</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="account.html">Account</a></li>
                        </ul>
                    </nav>
                    <a href="cart.html"><img src="images/cart.svg" alt="" width="30px" height="30px"/></a>
                    <img className="menu-icon" src="images/menu.png" alt="mneu" width="30px" height="30px" onclick="menutoggle()"/>
                </div>
            </div>
        </div>
    )
}

export default Header
