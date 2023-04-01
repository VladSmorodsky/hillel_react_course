import {combineReducers} from "redux";
import {repositoryReducer} from "./repository/repository.reducer";
import {profileReducer} from "./profile/profile.reducer";

const rootReducer = combineReducers({
  repositoryReducer: repositoryReducer,
  profileReducer: profileReducer,
});

export default rootReducer;