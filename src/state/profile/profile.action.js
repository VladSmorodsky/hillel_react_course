export const Profile = {
  SET_PLAYER: "Profile.SET_PLAYER",
  SET_USERNAMES: "Profile.SET_USERNAMES",
  GET_PLAYER_RESULT_LOADING: "Profile.GET_PLAYER_RESULT",
  GET_PLAYER_RESULT_SUCCESS: "Profile.GET_PLAYER_RESULT_SUCCESS",
  GET_PLAYER_RESULT_FAILURE: "Profile.GET_PLAYER_RESULT_FAILURE",
  SET_WINNER: "Profile.SET_WINNER"
}

export const setPlayerAction = (payload) => {
  return {
    type: Profile.SET_PLAYER,
    payload
  }
}

export const getPlayerResultLoadingAction = () => {
  return {
    type: Profile.GET_PLAYER_RESULT_LOADING,
  }
}

export const getPlayerResultSuccessAction = (payload) => {
  return {
    type: Profile.GET_PLAYER_RESULT_SUCCESS,
    payload
  }
}

export const getPlayerResultFailureAction = (payload) => {
  return {
    type: Profile.GET_PLAYER_RESULT_FAILURE,
    payload
  }
}

export const setUsernameAction = (payload) => {
  return {
    type: Profile.SET_USERNAMES,
    payload
  };
}

export const setWinner = () => {
  return {
    type: Profile.SET_WINNER,
  }
}

