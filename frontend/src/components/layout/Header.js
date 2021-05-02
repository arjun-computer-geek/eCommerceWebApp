import React from 'react';
import './Header.css'


const Header = () => {
    return (
        <>
            
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <h1>Give Your Workout <br /> A New Style!</h1>
                            <p id="demo">Sucess isn't always about greatness. It's about consistency. Consistent <br /> hard work gains sucess. Greatness will come.</p>
                            <a href="" className="btn">Explore Now &#8594;</a>
                        </div>
                        <div className="col-2">
                            <img src="images/img.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
