import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import style from './movies.module.scss';

import api from 'services/movies-api';
import MovieList from 'components/MovieList/MovieList';
import SearchBar from 'components/SearchBar/SearchBar';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams('');
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query') ?? '';

  const location = useLocation();
  useEffect(() => {
    if (!query) {
      return;
    }

    api.fetchSearchMovies(query.trim()).then(data => {
      setMovies(data.results);
    });
  }, [query]);

  const onSubmit = search => {
    setSearchParams({ query: search });
  };

  return (
    <section className={style.section}>
      <SearchBar onSubmit={onSubmit} />

      {query ? (
        <MovieList movies={movies} location={location} />
      ) : (
        <></>
      )}
    </section>
  );
};

export default Movies;
