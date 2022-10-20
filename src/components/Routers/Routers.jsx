import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "../Layout/Layout";
import {Day} from "../Day";
import {IrregularVerbs} from "../IrregularVerbs";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="days/:day" element={<Day/>}/>
                <Route path="irregularVerbs/" element={<IrregularVerbs/>}/>
            </Route>
        </Routes>
    );
};

export {Routers};