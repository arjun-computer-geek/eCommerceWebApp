import React from 'react';
import './Offer.css';

const Offer = () => {
    return (
        <>
           <div className="offer">
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <img src="images/products/p5.png" className="offer-img" />
                </div>
                <div className="col-2">
                    <p>Exclusively Avilable on eCommerceWebApp</p>
                    <h1>Smart Brand 4</h1>
                    <small>The Mi Brand features 39.9% larger than before. More softer than before. More battery life. Mrore power saver.</small> <br />
                    <a href=""className="btn">Buy Now &#8594;</a>
                </div>
            </div>
        </div>
    </div> 
        </>
    )
}

export default Offer
