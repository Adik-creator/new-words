import React from 'react';
import './dictionary.css'

const Dictionary = ({dictionary}) => {
    return (
        <div className="card">
            <div className="cardMedia">
                <img src={dictionary.img} alt="image" className="cardImage"/>
            </div>
            <div className="cardContent">
                <h3 className="cardEnglish">{dictionary.english}</h3>
                <h4 className="cardRussian">{dictionary.russian}</h4>
            </div>
        </div>
    );
};

export { Dictionary };

