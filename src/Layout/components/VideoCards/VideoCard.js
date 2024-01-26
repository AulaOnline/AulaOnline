import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './VideoCard.css';

const VideoCard = ({ title, imageUrl, duration }) => {
  return (
    <Card className="card">
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image= {imageUrl}
      />
      <CardContent className="card-content">
        <Typography gutterBottom variant="h5" component="div" className="card-title">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="card-duration">
          Duração restante: {duration} minutos
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
