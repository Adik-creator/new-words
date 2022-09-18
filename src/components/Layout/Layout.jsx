import React from 'react';
import {Outlet} from 'react-router-dom'
import {Header} from "../Header";

import styles from './Layout.module.css'
import {Buttons} from "../Buttons";

const Layout = () => {
    return (
        <div className={styles.wrapper}>

            <div className={styles.header}>
                <Header/>
            </div>

            <div className={styles.buttons}>
                <Buttons/>
            </div>

            <main className={styles.container}>
                <Outlet/>
            </main>

            <footer className={styles.footer}>
                footer
            </footer>
        </div>
    );
};

export default Layout;