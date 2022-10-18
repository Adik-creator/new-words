import React from 'react';
import {useMatch} from "react-router-dom";
import {Button} from "../Themes";



const CustomLink = ({to, children, ...props}) => {

    const match = useMatch(to)
    return (
        <Button
            to={to}
            {...props}
            style={match ? {textDecoration: "underline"} : {textDecoration: "none"}}
        >
            {children}
        </Button>
    );
};

export {CustomLink};