import {Repository} from "./repository.action";

const initialState = {
  selectedLanguage: 'All',
  repositories: [],
  error: null,
  loading: false,
};

export const repositoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case Repository.SET_LANGUAGE:
      return {
        ...state,
        selectedLanguage: action.payload
      };
    case Repository.GET_REPOS_LOADING:
      return {
        ...state,
        error: null,
        loading: true,
      }
    case Repository.GET_REPOS_SUCCESS:
      return {
        ...state,
        repositories: action.payload,
        loading: false,
      }
    case Repository.GET_REPOS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    case Repository.SEARCH_REPOS_LOADING:
      return {
        ...state,
        repositories: {},
        error: null,
        loading: true,
      }
    case Repository.SEARCH_REPOS_SUCCESS:
      return {
        ...state,
        repositories: action.payload,
        loading: false,
      }
    case Repository.SEARCH_REPOS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }

    default:
      return initialState;
  }
}