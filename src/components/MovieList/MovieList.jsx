import style from './movieList.module.scss';
import PropTypes from 'prop-types';
import MovieItem from 'components/MovieItem/MovieItem';


const MovieList = ({movies, location}) => {

  return (
    <ul className={style.list}>
      {movies.map(({ id, title, poster_path }) => (
        <MovieItem
          key={id}
          id={`${id}`}
          title={title}
          poster_path={poster_path}
          location={location}
        />
      ))}
    </ul>
  );
};

MovieList.propTypes = {
    movies: PropTypes.array,
    location: PropTypes.object,
}

export default MovieList;
