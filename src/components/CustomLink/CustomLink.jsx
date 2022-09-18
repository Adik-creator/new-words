import React from 'react';
import {Link, useMatch} from "react-router-dom";
// import styles from './CustomLink.module.css'

const CustomLink = ({to, children, ...props}) => {

    const match = useMatch(to)
    return (
        <Link
            to={to}
            {...props}
            style={match ? {textDecoration: "underline"} : {textDecoration: "none"}}
        >
            {children}
        </Link>
    );
};

export {CustomLink};