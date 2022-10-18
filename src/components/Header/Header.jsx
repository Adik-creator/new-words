import React from 'react';
import {StyleHeader} from "../Themes";

import {CustomLink} from "../CustomLink/CustomLink";
import american_courses from "../../imgs/cards-image/logo_american_courses.jpg";
import {IrregularVerbs} from "../IrregularVerbs";
import {useDarkMode} from "../../hooks/useDarkMode";

import './Header.css'
const Header = () => {

    const {toggle} = useDarkMode();

    return (
        <StyleHeader>
            <section className="top_nav">
                <div>
                    <CustomLink to="/">
                        <img src={american_courses} alt="logo" className="headerImg"/>
                    </CustomLink>
                </div>
                <input id="menu_toggle" type="checkbox"/>
                <label className='menu_button_container' htmlFor="menu_toggle">
                    <div className='menu_button'></div>
                </label>
                <ul className="menu">

                    <li><button onClick={toggle} className="darkMode">Dark Mode</button></li>
                    {/*<li><IrregularVerbs/></li>*/}
                    <li>Three</li>
                    <li>Four</li>
                    <li>Five</li>
                </ul>
            </section>

            <h2 className="header_h2">Prince and Zhanayim's class</h2>
        </StyleHeader>
    );
};

export {Header};
