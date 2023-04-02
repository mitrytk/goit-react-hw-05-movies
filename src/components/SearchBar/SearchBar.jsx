import { useState } from 'react';
import PropTypes from 'prop-types';
import style from './searchBar.module.scss';

const SearchBar = ({onSubmit}) => {
    const [ search, setSearch] = useState('');

    const heandleChange = e => {
        setSearch(e.target.value);
    };

    const heandleSubmit = e => {
        e.preventDefault();
    
        onSubmit(search.trim());
        setSearch('');
    };

  return (
    <form className={style.form} onSubmit={heandleSubmit}>
      <label className={style.label}>
        <input
        className={style.input}
          type="text"
          value={search}
          onChange={heandleChange}
        />
      </label>
      <button className={style.button} type='submit'onSubmit={heandleSubmit}>Search</button>
    </form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
}

export default SearchBar;
