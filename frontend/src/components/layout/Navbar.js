import React, { useState }  from 'react'
import Media from 'react-media';


const Navbar = () => {
    const [show, setShow] = useState(true);
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <img src="images/logo.png" alt="logo" width="400px" height="80px" />
                </div>
                <nav>
                    <Media query="(min-width:800px)">
                        {
                            show?<ul id="menuItems">
                                <li><a href="">Home</a></li>
                                <li><a href="">Products</a></li>
                                <li><a href="">About</a></li>
                                <li><a href="">Contact</a></li>
                                <li><a href="">Account</a></li>
                            </ul>:null
                        }
                    </Media>
                </nav>
                <img src="images/cart.svg" alt="" width="30px" height="30px" />
                <img className="menu-icon" src="images/menu.png" alt="mneu" width="30px" height="30px" onClick={() => setShow(!show)}/>
            </div>
        </>
    )
}

export default Navbar
