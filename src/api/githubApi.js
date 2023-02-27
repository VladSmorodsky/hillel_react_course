import axios from "axios";

export const fetchPopularRepositories = (language) => {
  return axios.get( window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`))
    .then(result => result.data.items)
    .catch(error => console.log(error));
}

export const fetchSearchResult = (searchValue) => {
  return axios.get( window.encodeURI(`https://api.github.com/search/repositories?q=${searchValue}`))
    .then(result => result.data.items)
    .catch(error => console.log(error));
}