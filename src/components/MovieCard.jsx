import React from 'react';
import {
  Box, Button, Card, CardActions, CardActionArea, CardContent, Typography,
} from '@material-ui/core';

const MovieCard = ({ description, img, onClick, title }) => {
  return (
    <Box width={400}>
      <Card>
        <CardActionArea onClick={onClick}>
          <img alt={title} src={img} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default MovieCard;
