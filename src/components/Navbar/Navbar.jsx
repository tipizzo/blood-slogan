import React from "react";
import './styles.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-white" role="navigation">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">BLOOD SLOGAN</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item"> 
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item"> 
                            <a className="nav-link" href="#">Team</a>
                        </li>
                        <li className="nav-item"> 
                            <a className="nav-link" href="#">Contacts</a>
                        </li>
                        <li className="nav-item"> 
                            <a className="nav-link" href="#">Helps</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-danger btn-lg">DONATE</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;