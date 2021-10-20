import { combineReducers } from "redux";
import personnelReducers from "./reducers/personnelReducers";

export default combineReducers({
  personnel: personnelReducers,
});
