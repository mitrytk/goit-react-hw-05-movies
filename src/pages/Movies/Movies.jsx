import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import style from './movies.module.scss';

import api from 'services/movies-api';
import { updateMovies } from 'redux/actions';

import MovieList from 'components/MovieList/MovieList';
import SearchBar from 'components/SearchBar/SearchBar';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams('');
  const movies = useSelector(state => state.movies)
  const query = searchParams.get('query') ?? '';

  const dispath = useDispatch();
  const location = useLocation();
  useEffect(() => {
    if (!query) {
      return;
    }

    api.fetchSearchMovies(query.trim()).then(data => {
      dispath(updateMovies(data.results));
    });
  }, [query, dispath]);

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
