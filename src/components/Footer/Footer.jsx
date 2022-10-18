import React from 'react';
import styles from './Footer.module.css'
import {StyleFooter} from "../Themes";


const Footer = () => {
    return (
        <StyleFooter>
            <div>
                <div className={styles.wrapper}>
                    <p>Спасибо за внимание 😁</p>
                </div>
            </div>
        </StyleFooter>
    );
};

export {Footer};