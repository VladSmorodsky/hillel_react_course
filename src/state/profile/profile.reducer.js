import {Profile} from "./profile.action";

const initialState = {
  players: {
    'player1': {
      username: '',
      avatar: ''
    },
    'player2': {
      username: '',
      avatar: ''
    },
  },
  playersId: ['player1', 'player2'],
  usernames: {
    'player1': { username: ''},
    'player2': { username: ''},
  },
  playersSummary: {},
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case Profile.SET_PLAYER:
      return {
        ...state,
        playersSummary: {},
        players: {
          ...state.players,
          [action.payload.id]: action.payload.data
        }
      }
    case Profile.SET_USERNAMES:
      return {
        ...state,
        usernames: {
          ...state.usernames,
          [action.payload.id]: action.payload.username,
        }
      }
    case Profile.SET_WINNER:
      return {
        ...state,
        playersSummary: {
          ...state.playersSummary,
          [0]: {
            ...state.playersSummary[0],
            winner: true,
          }
        }
      }
    case Profile.GET_PLAYER_RESULT_LOADING:
      return {
        ...state,
        error: null,
        loading: true,
      }
    case Profile.GET_PLAYER_RESULT_SUCCESS:
      return {
        ...state,
        playersSummary: action.payload,
        loading: false
      }
    case Profile.GET_PLAYER_RESULT_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default:
      return initialState;
  }
}