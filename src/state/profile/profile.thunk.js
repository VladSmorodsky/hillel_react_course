import {setWinner, getPlayerResultLoadingAction,
  getPlayerResultSuccessAction, getPlayerResultFailureAction} from "./profile.action";

import {battle} from "../../api/githubApi";

export const getBattleResult = (usernames) => async (dispatch) => {
  try {
    dispatch(getPlayerResultLoadingAction());
    const result = await battle(usernames);
    dispatch(getPlayerResultSuccessAction(result));
    dispatch(setWinner());
  } catch (e) {
    dispatch(getPlayerResultFailureAction(e));
  }
}