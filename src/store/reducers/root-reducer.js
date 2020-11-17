import {combineReducers} from "redux";
import {gameData} from "./game-data/game-data";
import {gameProcess} from "./game-process/game-process";
import {user} from "./user/user";

export const NameSpace = {
  DATA: `DATA`,
  GAME: `GAME`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: gameData,
  [NameSpace.GAME]: gameProcess,
  [NameSpace.USER]: user,
});
