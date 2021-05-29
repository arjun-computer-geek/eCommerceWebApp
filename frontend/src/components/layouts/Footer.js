import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="row">
                <div className="footer-col-1">
                    <h3>Download our App</h3>
                    <p>Download App for Android and ios mobile phone</p>
                    <div className="app-logo">
                        <img src="images/play-store.png" alt=""/>
                        <img src="images/app-store.png" alt=""/>
                    </div>
                </div>
                <div className="footer-col-2">
                    <img src="images/white.png" alt=""/>
                    <p>Our Purpose is to sustainably make the pleasure and benifits of sport accessible to the many.</p>
                </div>
                <div className="footer-col-3">
                    <h3>Useful Links</h3>
                    <ul>
                        <li>Cupons</li>
                        <li>Blog Post</li>
                        <li>Return Policy</li>
                        <li>Join Affiliate</li>
                    </ul>
                </div>
                <div className="footer-col-4">
                    <h3>Follow US</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Yotube</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <p className="copyright">Copyright-2021 - eCommerceWebApp</p>
        </div>
    )
}

export default Footer
