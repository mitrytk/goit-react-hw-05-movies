export const updateMovies = movies => {
  return {
    type: 'movies/updateMovies',
    payload: { movies: movies },
  };
};
