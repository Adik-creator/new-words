import React from 'react';
import styles from './Header.module.css'
import american_courses from '../../imgs/cards-image/logo_american_courses.jpg'
import {CustomLink} from "../CustomLink/CustomLink";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.headerTitle}>
                    <h1>New words</h1>
                    <p>(Prince and Janayim's class)</p>
                </div>
                <div>
                </div>
                <div className={styles.headerLogo}>
                    <CustomLink to="/">
                        <img src={american_courses} alt="logo" className={styles.headerImg}/>
                    </CustomLink>
                </div>
            </div>
        </div>
    );
};

export { Header };
