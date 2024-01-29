import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const VideoCard = ({ title, imageUrl, duration }) => {
  return (
    <Card sx={{ maxWidth:'300px',borderRadius: '12px', boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.5)'}}>
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image= {imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Duração restante: {duration} minutos
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
