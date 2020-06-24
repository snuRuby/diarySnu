import { Box, CircularProgress, MenuItem, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import { useApi } from '../util';
import { MovieCard } from '../components';
import { useHistory } from 'react-router-dom';

const Main = () => {
  const api = useApi();
  const [movies, setMovies] = useState();
  const [genre, setGenre] = useState('All');
  const history = useHistory();

  useEffect(() => { api.getMovies().then(setMovies) }, [api]);

  if (!movies) {
    return <CircularProgress />;
  }

  let genresArray = [];
  movies.forEach(({ genres }) => {
    genresArray = [...genresArray, ...genres || []];
  });
  const genres = ['All', ...new Set(genresArray)];
  const filteredMovies = movies.filter((movie) => (genre === 'All' ? true : movie.genres?.includes(genre)));

  return (
    <Box>
      <TextField
        label="Genres"
        onChange={({ target: { value } }) => setGenre(value)}
        select
        value={genre}
      >
        {genres.map((g) => <MenuItem key={g} value={g}>{g}</MenuItem>)}
      </TextField>
      {filteredMovies.map(({description_full, id, medium_cover_image, title }) => (
      <MovieCard
        description={description_full}
        img={medium_cover_image}
        key={id}
        onClick={() => history.push(`${id}`)}
        title={title}
      />))}
    </Box>
  );
}

export default Main;
