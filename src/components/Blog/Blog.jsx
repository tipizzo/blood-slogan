import BloodDonations from "../../data/BloodDonations";

import React from "react";
import './styles.css'

function Blog(props) {

    const { post, postPlace, postDate } = props;

    return (

        <div className="card">
            <div className="card-header">BANK BLOOD</div>
                <div className="card-body">
                    <div className="card-title">{postDate}, {postPlace}</div>
                    <p className="card-text">{post}</p>
                    <a href="#" className="btn btn-outline-danger">Read more</a>
                </div>
            <div/>
        </div>
    )
}

export default Blog;