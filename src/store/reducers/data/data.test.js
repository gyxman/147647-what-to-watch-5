import {data} from "./data";
import {ActionType} from "../../action";

const movie = {
  "background_color": `#FDFDFC`,
  'background_image': `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Snatch.jpg`,
  "description": `Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.`,
  "director": `Guy Ritchie`,
  "genre": `Comedy`,
  "id": 13,
  "is_favorite": false,
  "name": `Snatch`,
  "poster_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Snatch.jpg`,
  "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/snatch.jpg`,
  "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  "rating": 0.2,
  "released": 2000,
  "run_time": 104,
  "scores_count": 716577,
  "starring": [`Jason Statham`, `Brad Pitt`, `Benicio Del Toro`],
  "video_link": `http://media.xiph.org/mango/tears_of_steel_1080p.webm`
};

const movieLocal = {
  "backgroundColor": `#FDFDFC`,
  'backgroundImage': `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Snatch.jpg`,
  "description": `Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.`,
  "director": `Guy Ritchie`,
  "genre": `Comedy`,
  "id": 13,
  "isFavorite": false,
  "name": `Snatch`,
  "posterImage": `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Snatch.jpg`,
  "previewImage": `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/snatch.jpg`,
  "previewVideoLink": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  "rating": 0.2,
  "released": 2000,
  "runTime": 104,
  "scoresCount": 716577,
  "starring": [`Jason Statham`, `Brad Pitt`, `Benicio Del Toro`],
  "videoLink": `http://media.xiph.org/mango/tears_of_steel_1080p.webm`
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(data(void 0, {})).toEqual({
    movies: [],
    favoriteMovies: [],
    genres: [],
    promoMovie: null,
  });
});

it(`Reducer should update movies by load movies`, () => {
  expect(data({
    movies: [],
  }, {
    type: ActionType.LOAD_MOVIES,
    payload: [movie],
  })).toEqual({
    movies: [movieLocal]
  });
});

it(`Reducer should update favorite movies by load favorite movies`, () => {
  expect(data({
    favoriteMovies: [],
  }, {
    type: ActionType.LOAD_FAVORITE_MOVIES,
    payload: [movie],
  })).toEqual({
    favoriteMovies: [movieLocal]
  });
});

it(`Reducer should update genres by load genres`, () => {
  expect(data({
    genres: [],
  }, {
    type: ActionType.LOAD_GENRES,
    payload: [movie],
  })).toEqual({
    genres: [`Comedy`]
  });
});

it(`Reducer should update promo movie by load promo movie`, () => {
  expect(data({
    promoMovie: null,
  }, {
    type: ActionType.LOAD_PROMO_MOVIE,
    payload: movie,
  })).toEqual({
    promoMovie: movieLocal
  });
});
