import {combineReducers} from "redux";
import repositoryReducer from "./repository/repository.slice";
import profileReducer from "./profile/profile.slice";

const rootReducer = combineReducers({
  repositoryReducer: repositoryReducer,
  profileReducer: profileReducer,
});

export default rootReducer;
