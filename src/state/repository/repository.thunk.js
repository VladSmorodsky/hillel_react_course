import {
  getReposLoadingAction, getReposSuccessAction, getReposFailureAction,
  searchReposLoadingAction, searchReposSuccessAction, searchReposFailureAction
} from "./repository.action";

import {fetchPopularRepositories, fetchSearchResult} from "../../api/githubApi";

export const getRepos = (selectedLanguage) => async (dispatch) => {
  try {
    dispatch(getReposLoadingAction());
    const repositories = await fetchPopularRepositories(selectedLanguage);
    dispatch(getReposSuccessAction(repositories));
  } catch (e) {
    dispatch(getReposFailureAction(e));
  }
}

export const searchRepos = (repoName) => async (dispatch) => {
  try {
    dispatch(searchReposLoadingAction());
    const repositories = await fetchSearchResult(repoName);
    dispatch(searchReposSuccessAction(repositories));
  } catch (e) {
    dispatch(searchReposFailureAction(e));
  }
}
