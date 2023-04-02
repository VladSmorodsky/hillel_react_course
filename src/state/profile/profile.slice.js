import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {battle} from "../../api/githubApi";

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

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setPlayerAction: (state, {payload}) => {
      state.players[payload.id] = payload.data;
      state.usernames[payload.id].username = payload.data.username;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBattleResult.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getBattleResult.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.playersSummary = payload;
    });
    builder.addCase(getBattleResult.rejected, (state, {payload}) => {
      state.loading = false;
      state.error = payload;
    });
  }
});

export const getBattleResult = createAsyncThunk(
  'profile/getBattleResult',
  async (usernames, {rejectedWithValue}) => {
    try {
      const profileSummary = await battle(usernames);
      profileSummary[0].winner = true;

      return profileSummary;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

export const {setPlayerAction} = profileSlice.actions;

export default profileSlice.reducer;
