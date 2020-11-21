import {ALL_GENRES} from "./const";

export const getMoviesByGenre = (movies, genre) => {
  if (genre === ALL_GENRES) {
    return movies;
  }

  return movies.filter((movie) => movie.genre === genre);
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const movieMapDtoToLocal = (movie) => ({
  id: movie.id,
  name: movie.name,
  posterImage: movie.poster_image,
  previewImage: movie.preview_image,
  backgroundImage: movie.background_image,
  backgroundColor: movie.background_color,
  videoLink: movie.video_link,
  previewVideoLink: movie.preview_video_link,
  description: movie.description,
  rating: movie.rating,
  scoresCount: movie.scores_count,
  director: movie.director,
  starring: movie.starring,
  runTime: movie.run_time,
  genre: movie.genre,
  released: movie.released,
  isFavorite: movie.is_favorite,
});

export const getGenres = (movies) => {
  const genres = new Set();

  movies.forEach(({genre}) => genres.add(genre));

  return Array.from(genres);
};

export const getTextForRating = (rating) => {
  if (rating >= 0 && rating < 3) {
    return `Bad`;
  }

  if (rating >= 3 && rating < 5) {
    return `Normal`;
  }

  if (rating >= 5 && rating < 8) {
    return `Good`;
  }

  if (rating >= 8 && rating < 10) {
    return `Very good`;
  }

  return `Awesome`;
};

export const formatTime = (time) => {
  const hour = Math.floor(time / 60);

  return `${hour}h ${time - hour * 60}m`;
};

export const formatDateToTime = (date) => {
  const currentDate = new Date(date);

  return `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`;
};

const MONTHS = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`
];

export const formatDate = (date) => {
  const currentDate = new Date(date);

  return `${MONTHS[currentDate.getMonth()]} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
};
