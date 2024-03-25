import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActions} from "@mui/material";
import { useNavigate } from 'react-router-dom';

const MediaCard = ({title, link}) => {
    const navigate = useNavigate()

    const handleLinkClick = () => {
        navigate(`/Player?linkAula=${encodeURI(link)}`)
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="video youtube"
            />
            <CardContent>
                {/* <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography> */}
                <Typography variant="body2" color="text.secondary">
                    {title}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleLinkClick}>Ir ao Video</Button>
                {/* <Button size="small">Learn More</Button> */}
            </CardActions>
        </Card>
    );
};

export default MediaCard;
