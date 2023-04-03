import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import api from '../../services/movies-api';
import style from './home.module.scss';

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
      <MovieList movies={movies} location={location}/>
    </section>
  );
};
export default Home;
