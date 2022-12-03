import { combineReducers } from "redux";
import airlineReducers from "./airlineReducers";

export default combineReducers({
  airline: airlineReducers,
});
