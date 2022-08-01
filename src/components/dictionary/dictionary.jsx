import React from 'react';
import './dictionary.css'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';

const Dictionary = ({dictionary}) => {
    return (
        <Card sx={{width: 345}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="180"
                    image={dictionary.img}
                    alt="american courses"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {dictionary.english}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {dictionary.russian}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export { Dictionary };
