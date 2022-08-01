import React from 'react';
import './header.css'
import american_courses from '../dictionary/img/logo_american_courses.jpg'

const Header = () => {
    return (
        <div className="header">
            <div className="wrapper">
                <div className="headerTitle">
                    <h1>New words</h1>
                    <p>(Prince and Janayim class)</p>
                </div>
                <div className="headerLogo">
                    <img src={american_courses} alt="logo" className="headerImg"/>
                </div>
            </div>
        </div>
    );
};

export { Header };
