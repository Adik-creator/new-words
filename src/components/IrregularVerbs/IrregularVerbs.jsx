import React from 'react';
import styles from './IrregularVerbs.module.css'
import {IRREGULAR_VERBS} from "../../utils/data";
import {IrregularVerb} from "../IrregularVerb";

const IrregularVerbs = () => {
    return (
        <div className={styles.IrregularVerbs}>
            {IRREGULAR_VERBS.map((word) => <IrregularVerb word={word} key={word.id}/>)}
        </div>
    );
};

export { IrregularVerbs };