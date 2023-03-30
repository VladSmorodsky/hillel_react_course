import {combineReducers} from "redux";
import {repositoryReducer} from "./repository/repository.reducer";

const rootReducer = combineReducers({
  repositoryReducer: repositoryReducer,
});

export default rootReducer;