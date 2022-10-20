import React from 'react';
import styles from './IrregularVerb.module.css'

const IrregularVerb = ({word}) => {
    return (
        <div className={styles.irregular_verb}>
            <ul className={styles.irregular_ul}>
                <li>{word.BaseForm}</li>
                <li>{word.PastSimple}</li>
                <li>{word.Russian}</li>
            </ul>
        </div>
    );
};

export { IrregularVerb };