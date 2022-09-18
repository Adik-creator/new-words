import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "../Layout/Layout";
import {Day} from "../Day";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="days/:day" element={<Day/>}/>
            </Route>
        </Routes>
    );
};

export {Routers};