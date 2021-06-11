import React, { useEffect, useRef } from 'react'
import{ Link, Route } from 'react-router-dom'
import Search from './Search'

const Header = () => {
    
    
    return (
        <div className="header">
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <Link to="/"><img src="images/logo.png" alt="logo" width="400px" height="80px"/></Link>
                    </div>
                    <nav>
                        {/* <ul ref={menuItems}> */}
                        <ul>
                            <li>
                                <Route render={({history}) => <Search history={history} />} />
                            </li>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="products.html">Products</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="account.html">Account</a></li>
                            <li>    
                                <Link to="#"><img src="images/cart.svg" alt="" width="30px" height="30px"/></Link>
                            </li>
                        </ul>
                            <img className="menu-icon" src="images/menu.png" alt="mneu" width="30px" height="30px" />
                    </nav>
                </div>
            </div>
        </div>
    )
}


export default Header
