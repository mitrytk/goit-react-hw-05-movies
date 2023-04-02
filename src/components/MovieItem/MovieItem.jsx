import style from './movieItem.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import movieImg from 'img/movie.svg';

const MovieItem = ({id, location, poster_path, title}) => {

  return (
    <li className={style.item}>
      <Link className={style.link} to={`${id}`} state={{ from: location }}>
        <img
            className={style.itemImg}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : movieImg
          }
          alt={title}
          width="180"
        />
        <p className={style.nameMovie}>{title}</p>
      </Link>
    </li>
  );
};

MovieItem.propTypes = {
  id: PropTypes.string,
  location: PropTypes.object,
  poster_path: PropTypes.string,
  title: PropTypes.string,
}

export default MovieItem;
