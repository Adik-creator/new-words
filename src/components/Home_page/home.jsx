import React from "react";
import "./Home.css";


import {useNavigate} from 'react-router-dom';

import {DICTIONARY} from "../../utils";
import {Header} from "../header";

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <Header/>
            <div className="days">
                {
                    Object.keys(DICTIONARY).map((el, index) => (
                        <button className="button-87" role="button"
                                onClick={() => navigate(`/day/${el}`)}>
                            {`Day ${index + 1}`}
                        </button>
                    ))
                }
            </div>
        </>
    );
};

export {Home};



