import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import api from '../../services/movies-api';
import style from './home.module.scss';

import MovieItem from 'components/MovieItem/MovieItem';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    api.fetchPopularMovies().then(data => setMovies(data.results));
  }, []);

  return (
    <section className={style.section}>
      <h1 className={style.title}>Trending today</h1>
      <MovieList>
        {movies.map(({ id, title, name, poster_path }) => (
          <MovieItem key={id} id={`movies/${id}`} location={location} poster_path={poster_path} title={title ?? name}/>
        ))}
      </MovieList>
    </section>
  );
};
export default Home;
