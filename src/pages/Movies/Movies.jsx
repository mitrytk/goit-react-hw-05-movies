import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import style from './movies.module.scss';

import api from 'services/movies-api';
import MovieList from 'components/MovieList/MovieList';
import MovieItem from 'components/MovieItem/MovieItem';
import SearchBar from 'components/SearchBar/SearchBar';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams('');
  const [page] = useState(1);
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query') ?? '';

  const location = useLocation();
  useEffect(() => {
    if (!query) {
      return;
    }

    api.fetchSearchMovies(page, query.trim()).then(data => {
      setMovies(data.results);
    });
  }, [searchParams, query, page]);

  const onSubmit = search => {
    setSearchParams({ query: search });

    api.fetchSearchMovies(page, search).then(data => {
      setMovies(data.results);
    });
  };

  return (
    <section className={style.section}>
      <SearchBar onSubmit={onSubmit} />

      {query ? (
        <MovieList>
          {movies.map(({ id, title, poster_path }) => (
            <MovieItem
              key={id}
              id={toString(id)}
              title={title}
              poster_path={poster_path}
              location={location}
            />
          ))}
        </MovieList>
      ) : (
        <></>
      )}
    </section>
  );
};

export default Movies;
