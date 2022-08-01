import React from "react";
import "./Home.css";


import {useNavigate} from 'react-router-dom';

import Box from "@mui/material/Box";
import {Button} from "@mui/material";
import {DICTIONARY} from "../../utils";
import {Header} from "../header";

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <Header/>
            <Box sx={{
                width: "100%",
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: 2,
                paddingTop: 2,
                paddingBottom: 2
            }}>
                {
                    Object.keys(DICTIONARY).map((el, index) => (
                        <Button variant="contained" onClick={() => navigate(`/day/${el}`)}>
                            {`Day ${index + 1}`}
                        </Button>
                    ))
                }
            </Box>
        </>
    );
};

export {Home};
