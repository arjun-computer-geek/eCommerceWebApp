import React, { Fragment } from 'react'
import './Header.css'

const Header = () => {
    return (
        <Fragment>
            <header class="header">
                <div class="brand">
                    <button onclick="openMenu()">
                        &#9776;
                    </button>
                    <a href="index.html">Amazon Clone</a>
                </div>
                <div class="header-links">
                    <a href="cart.html">Cart</a>
                    <a href="signin.html">Sign In</a>

                </div>
            </header>
        </Fragment>
    )
}

export default Header
