import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchPopularRepositories, fetchSearchResult} from "../../api/githubApi";

const initialState = {
  selectedLanguage: 'All',
  repositories: [],
  error: null,
  loading: false,
};

const repositorySlice = createSlice({
  name: 'repository',
  initialState,
  reducers: {
    setLanguageAction: (state, action) => {
      state.selectedLanguage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRepos.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getRepos.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.repositories = payload;
    });
    builder.addCase(getRepos.rejected, (state, {payload}) => {
      state.loading = false;
      state.error = payload;
    });
    builder.addCase(searchRepos.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(searchRepos.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.repositories = payload;
    });
    builder.addCase(searchRepos.rejected, (state, {payload}) => {
      state.loading = false;
      state.error = payload;
    });
  }
});

export const getRepos = createAsyncThunk(
  'repository/getRepos',
  async (selectedLanguage = 'All', {rejectWithValue}) => {
    try {
      return await fetchPopularRepositories(selectedLanguage);
    } catch(error) {
      return rejectWithValue(error);
    }
  }
);

export const searchRepos = createAsyncThunk(
  'repository/searchRepos',
  async (repoName, {rejectedWithValue}) => {
    try {
      return await fetchSearchResult(repoName);
    } catch (error) {
      rejectedWithValue(error);
    }
  }
);

export const {setLanguageAction} = repositorySlice.actions;

export default repositorySlice.reducer;
