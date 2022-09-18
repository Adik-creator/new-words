import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.wrapper}>
                <p>Спасибо за внимание 😁</p>
            </div>
        </div>
    );
};

export { Footer };