import changeTheNumber from "./upDown";
import multTheNumber from "./divMul";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeTheNumber,
  multTheNumber,
});

export default rootReducer;
