import React from 'react';
import { Link } from 'react-router-dom'

function AboutPage(props) {
    return (
       
        <div className="about-modal">
            <div className="about-content">
                    <div className="about-text">
                <h1>What's a MyBrary?</h1>
                <p>MyBrary is designed for avid readers who want to catalog their journey across the pages. Users are able to create an ongoing collection of books they'd like to read and check those books off of their reading list as their journey progresses. User's are also able to rate each book, as well as attatch notes to it, so that they are able to organize their thoughts and look back on them.</p>
                <Link to="/"><button className="back-button">Cancel</button></Link>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;