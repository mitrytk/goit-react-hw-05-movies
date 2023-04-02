import { useEffect, useState, Suspense, useRef } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import style from './movieDetails.module.scss';
import api from 'services/movies-api';

const MovieDetails = () => {
  const [title, setTitle] = useState('');
  const [score, setScore] = useState(0);
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState('');
  const [poster, setPoster] = useState('');

  const location = useLocation();
  const { movieId } = useParams();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    api.fetchFullDataMovie(movieId).then(data => {
      const dataGenres = [];
      data.genres.map(data => dataGenres.push(data.name));


      setTitle(data.original_title);
      setScore(data.vote_average);
      setOverview(data.overview);
      setGenres(dataGenres.join(', '));
      setPoster(data.poster_path);
    });
  }, [movieId]);

  return (
    <>
      <section className={style.moviecart}>
        <Link className={style.moviecart__link_back} to={backLinkLocationRef.current}>Go back</Link>
        <div className={style.moviecart_info}>
          <img className={style.moviecart_info__img}src={`https://image.tmdb.org/t/p/w300${poster}`} alt="" />
          <div>
            <h1 className={style.moviecart_info__title}>{title}</h1>
            <p className={style.moviecart_info__score}>User Score: {Math.ceil(score * 10)}%</p>
            <h2 className={style.moviecart_info__overview_title}>Overview</h2>
            <p className={style.moviecart_info__overview_text}>{overview}</p>
            <h2 className={style.moviecart_info__genres_title}>Genres</h2>
            <p className={style.moviecart_info__genres_text}>{genres}</p>
          </div>
        </div>
        <div className={style.additional}>
          <h2 className={style.additional__title}>Additional information</h2>
          <ul className={style.additional__list}>
            <li className={style.additional__item}>
              <Link className={style.additional__link} to="cast">Cast</Link>
            </li>
            <li className={style.additional__item}>
              <Link className={style.additional__link} to="reviews">Reviews</Link>
            </li>
          </ul>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </section>
    </>
  );
};

export default MovieDetails;
