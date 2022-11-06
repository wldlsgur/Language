import { combineReducers } from "redux";

import friend from "./reducer";

const rootReducer = combineReducers({
  friend,
});

export default rootReducer;
