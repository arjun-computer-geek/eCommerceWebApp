import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <>
           <div className="testimonial">
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab excepturi eaque repudiandae sapiente ullam cumque quaerat ducimus rem amet nobis facilis natus, praesentium voluptates dolorem iure velit ut suscipit non!</p>
                    <div className="rating">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                    </div>
                    <img src="images/users/img1.jpg" alt="user-image" className="user-img" />
                    <h3>John Doe</h3>
                </div>
                <div className="col-3">
                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab excepturi eaque repudiandae sapiente ullam cumque quaerat ducimus rem amet nobis facilis natus, praesentium voluptates dolorem iure velit ut suscipit non!</p>
                    <div className="rating">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                    </div>
                    <img src="images/users/img2.jpeg" alt="user-image" className="user-img" />
                    <h3>Jeny Doe</h3>
                </div>
                <div className="col-3">
                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab excepturi eaque repudiandae sapiente ullam cumque quaerat ducimus rem amet nobis facilis natus, praesentium voluptates dolorem iure velit ut suscipit non!</p>
                    <div className="rating">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                    </div>
                    <img src="images/users/img3.png" alt="user-image" className="user-img" />
                    <h3>Johny Doe</h3>
                </div>
            </div>
        </div>
    </div> 
        </>
    )
}

export default Testimonials
