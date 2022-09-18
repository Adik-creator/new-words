import React from "react";
import {useParams} from "react-router-dom";
import {DICTIONARY} from "../../utils/data";
import {Cards} from "../Cards";

import styles from './Day.module.css'

export const Day = () => {
    const {day} = useParams();

    return (
        <div>
            <div className={styles.dayCards}>
                {DICTIONARY[day].map((el) => (<Cards dictionary={el} key={el.id}/>))}
            </div>
        </div>);
};
