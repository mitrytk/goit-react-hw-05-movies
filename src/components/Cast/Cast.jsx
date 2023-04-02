import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import boyImg from '../../img/boy.svg';
import womenImg from '../../img/women.svg';
import genderImg from '../../img/gender.svg';
import style from './cast.module.scss';

import api from 'services/movies-api';

const Cast = () => {
  const [acters, setActers] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    api.fetchCreditsMovies(movieId).then(data => {
      setActers(data.cast);
    });
  }, [movieId]);

  return (
    <ul className={style.list}>
      {acters.map(({ id, name, character, profile_path, gender }) => (
        <li className={style.item} key={id}>
          {profile_path ? (
            <img
              className={style.img}
              src={`https://image.tmdb.org/t/p/w300${profile_path}`}
              alt={name}
              width="100"
            />
          ) : (
            <img
              className={style.img}
              src={gender === 0 ? genderImg : gender === 2 ? boyImg : womenImg}
              alt={name}
              width="100"
            />
          )}

          <p className={style.name_text}>{name}</p>
          <p className={style.character_text}>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
