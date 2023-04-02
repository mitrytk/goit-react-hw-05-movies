import style from './movieList.module.scss';

const MovieList = ({children}) => {
    return (
        <ul className={style.list}>
            {children}
        </ul>
    )
}

export default MovieList;