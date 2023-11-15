import React from "react";

import './styles.css';

function Footer() {
    return (
        <footer className="container-fluid bg-dark text-center text-white">
            <div className="container overflow-hidden text-center">
                <div className="row">
                    <div className="col contact">
                        <form>
                            <h3>Contact us</h3>
                            <input type="text" className="form-control" aria-describedby="nameHelp" placeholder="What's your name ?" />
                            <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="What's your email ?" />
                            <div className="form-text">We'll never share your email with anyone else.</div>
                            <textarea className="form-control" placeholder="Leave a message..."></textarea>
                            <button className="btn btn-success btn-lg msg-btn">SEND</button>
                        </form>
                    </div>
                    <div className="col address">
                        <h3>Address</h3>
                        <div>
                            <h4>Goma, Commune de Goma - La corniche, Les Volcans 024</h4>
                            <h5>Contacts:</h5>
                            <h6>+243990111889</h6>
                            <h6>+243990111998</h6>
                            <h6>info@bloodbank.com</h6>
                            <h6>assistant@bloodbank.com</h6>
                            <h5>Working hours:</h5>
                            <h6>Monday - Friday: 8 AM - 5 PM</h6>
                            <h6>Saturday:        8 AM - 12 PM (Remote)</h6>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>Proudly built with ❤ by Blood Slogan &copy; 2023</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;