import {extend} from "../../../utils";
import {ActionType} from "../../action";
import {ALL_GENRES} from "../../../const";

const initialState = {
  genre: ALL_GENRES
};

const gameProcess = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {genre: action.payload});
  }

  return state;
};


export {gameProcess};
