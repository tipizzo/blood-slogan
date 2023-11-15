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
                            <input type="text" className="form-control" aria-describedby="nameHelp" />
                            <input type="email" className="form-control" aria-describedby="emailHelp" />
                            <div className="form-text">We'll never share your email with anyone else.</div>
                            <textarea className="form-control"></textarea>
                        </form>
                    </div>
                    <div className="col">
                        Hello
                    </div>
                    <div className="col">
                        Hello
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;