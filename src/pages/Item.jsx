import {
 Button, Card, CardActions, CardContent, CircularProgress, Typography,
} from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useApi } from '../util';

const Item = () => {
  const api = useApi();
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const movie = await api.getMovie(+movieId);
      setMovie(movie);
    };
    fetchData();
  }, [api, movieId]);

  if (!movie) {
    return <CircularProgress />;
  }

  return (
    <Card>
      <img alt={movie.title} src={movie.large_cover_image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {movie.title_long}
        </Typography>
        <Typography variant="h6" component="h2">
          {movie.genres.join(', ')}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {movie.description_full}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => console.log('What the')}>
          <ThumbUpIcon />
          <Typography>
            {movieId}
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Item;
