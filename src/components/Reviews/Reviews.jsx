import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import style from './reviews.module.scss';
import api from 'services/movies-api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    api.fetchReviewsMovies(movieId).then(data => {
      setReviews(data.results);
    });
  }, [movieId]);

  return (
    <ul className={style.list}>
      {reviews.length !== 0 ? (
        reviews.map(({ id, author, content }) => (
          <li className={style.item} key={id}>
            <h2 className={style.title}>Author: {author}</h2>
            <p className={style.text}>{content}</p>
          </li>
        ))
      ) : (
        <p> We don't have any reviews for this movie.</p>
      )}
    </ul>
  );
};

export default Reviews;
