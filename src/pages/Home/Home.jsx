import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { updateMovies } from 'redux/actions';
import api from '../../services/movies-api';
import style from './home.module.scss';

import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const movies = useSelector(state => state.movies) 
  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    api.fetchPopularMovies().then(data => dispatch(updateMovies(data.results)));
  }, [dispatch]);

  return (
    <section className={style.section}>
      <h1 className={style.title}>Trending today</h1>
      <MovieList movies={movies} location={location}/>
    </section>
  );
};
export default Home;
