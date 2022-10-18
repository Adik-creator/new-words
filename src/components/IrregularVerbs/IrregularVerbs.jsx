import React from 'react';
import styles from './IrregularVerbs.module.css'
import {CustomLink} from "../CustomLink/CustomLink";

const IrregularVerbs = () => {
    return (
        <div className={styles.menu}>
            <CustomLink to={"/irregularVerbs"}>Irregular Verbs</CustomLink>
        </div>
    );
};

export {IrregularVerbs};