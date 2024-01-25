import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './VideoCard.css';

const VideoCard = ({ title, imageUrl, duration }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image= {imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {/*title*/}
          Título
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Duração restante: {/*duration*/} 10 minutos
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
