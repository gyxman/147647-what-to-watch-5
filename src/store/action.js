export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  LOAD_MOVIES: `LOAD_MOVIES`
};

export const loadMoviesAction = (questions) => ({
  type: ActionType.LOAD_MOVIES,
  payload: questions,
});

export const changeGenreAction = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre
});

