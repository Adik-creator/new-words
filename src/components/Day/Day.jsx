import React from "react";
import {useParams} from "react-router-dom";
import {DICTIONARY} from "../../utils";
import {Dictionary} from "../dictionary";
import {Home} from "../Home_page";

import './Day.css'

export const Day = () => {
    const {id} = useParams();

    return (
        <div>
            <Home/>
            <div className="dayCards">
                {DICTIONARY[id].map((el) => (
                    <Dictionary dictionary={el} key={el.id}/>
                ))}
            </div>
        </div>
    );
};
