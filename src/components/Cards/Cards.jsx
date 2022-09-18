import React from 'react';
import styles from './Cards.module.css'

const Cards = ({ dictionary }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardMedia}>
                <img src={dictionary.img} alt="image" className={styles.cardImage}/>
            </div>
            <div className={styles.cardContent}>
                <h3 className={styles.cardEnglish}>{dictionary.english}</h3>
                <h4 className={styles.cardRussian}>{dictionary.russian}</h4>
            </div>
        </div>
    );
};

export { Cards };

