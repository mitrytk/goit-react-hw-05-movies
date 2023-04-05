const initialState = {
  movies: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'movies/updateMovies': {
      return action.payload;
    }
    default:
      return state;
  }
};
