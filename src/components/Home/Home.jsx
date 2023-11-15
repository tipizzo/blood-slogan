import React from "react";
import './styles.css';


function Home(props) {


/*
    const arrayDataItems = BloodDonations.map(element => {

        <div className="card" key={element.id}>
            <div className="card-header">Bank Blood</div>
                <div className="card-body">
                    <div className="card-title">{element.postDate}, {element.postPlace}</div>
                    <p className="card-text">{element.post}</p>
                    <a href="#" className="btn btn-outline-danger">Read more</a>
                </div>
            <div/>
        </div>
    })

    */

    return (
        <div className="container">
            <div className="introduction-section">
                <h1 className="heading-title">YOU CAN SAVE ONE LIFE TODAY</h1>
                <p className="introduction-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rem laudantium cupiditate consequuntu libero consequatur iste architecto sapiente iure sed, praesentium, consectetur mollitia, pariatuquasi! Officiis dolor dolorum molestiae?</p>
                <p className="">
                    <a className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover register-link">Click to Register Now</a>
                </p>
            </div>
            <div className="search-part">
                <h2>Search for blood opportunities in your area</h2>
                <form className="d-flex" role="search">
                    <input className="form-control me-2 search-bar" type="search" placeholder="Search for a location..." aria-label="Search" />
                    <button className="btn btn-danger search-btn">Search</button>
                </form>
                <div className="filter-section">
                    <span>Filter by: </span>
                    <button type="button" className="btn btn-outline-danger filter-btn">Location</button>
                    <button type="button" className="btn btn-outline-danger filter-btn">Dates</button>
                </div>
            </div>
            
        </div>
            
    )
 
}

export default Home;