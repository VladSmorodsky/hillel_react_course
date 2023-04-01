export const Repository = {
  SET_LANGUAGE: 'Repository.SET_LANGUAGE',
  GET_REPOS_LOADING: 'Repository.GET_REPOS_LOADING',
  GET_REPOS_SUCCESS: 'Repository.GET_REPOS_SUCCESS',
  GET_REPOS_FAILURE: 'Repository.GET_REPOS_FAILURE',
  SEARCH_REPOS_LOADING: 'Repository.SEARCH_REPOS_LOADING',
  SEARCH_REPOS_SUCCESS: 'Repository.SEARCH_REPOS_SUCCESS',
  SEARCH_REPOS_FAILURE: 'Repository.SEARCH_REPOS_FAILURE',
}

export const setLanguageAction = (payload) => {
  return {
    type: Repository.SET_LANGUAGE,
    payload
  }
}
export const getReposLoadingAction = () => {
  return {
    type: Repository.GET_REPOS_LOADING,
  }
}
export const getReposSuccessAction = (payload) => {
  return {
    type: Repository.GET_REPOS_SUCCESS,
    payload
  }
}
export const getReposFailureAction = (payload) => {
  return {
    type: Repository.GET_REPOS_FAILURE,
    payload
  }
}
export const searchReposLoadingAction = () => {
  return {
    type: Repository.SEARCH_REPOS_LOADING,
  }
}
export const searchReposSuccessAction = (payload) => {
  return {
    type: Repository.SEARCH_REPOS_SUCCESS,
    payload
  }
}
export const searchReposFailureAction = (payload) => {
  return {
    type: Repository.SEARCH_REPOS_FAILURE,
    payload
  }
}
