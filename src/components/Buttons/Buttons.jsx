import React from "react";
import {DICTIONARY} from "../../utils/data";
import "./Buttons.css";
import {CustomLink} from "../CustomLink/CustomLink";


const Buttons = () => {

    return (
        <>
            <div className="days">
                {Object.keys(DICTIONARY).map((el, index) => (
                    <CustomLink
                        key={index}
                        to={`/days/${el}`}
                    >
                        {`Day ${index + 1}`}
                    </CustomLink>
                ))}
            </div>
        </>
    );
};

export {Buttons};



