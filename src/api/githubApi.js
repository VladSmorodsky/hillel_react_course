import axios from "axios";

axios.defaults.headers.common = { Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}` };

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

export const getProfile = (username) => {
  return axios.get(`https://api.github.com/users/${username}`)
    .then(result => result.data)
    .catch(error => console.log(error))
}

export const getRepos = (username) => {
  return axios.get(`https://api.github.com/users/${username}/repos`)
    .then(result => result.data)
    .catch(error => console.log(error))
}

export const getStars = (repos) => {
  return repos.reduce((summary, repo) => summary + repo.stargazers_count, 0)
}

export const calculateStars = (repos) => {
  return getStars(repos);
}

export const getData = (username) => {
  return Promise.all([
    getProfile(username),
    getRepos(username)
  ])
    .then(([profile, repositories]) => ({profile, totalScores: calculateStars(repositories)}))
    .catch(error => console.log(error))
}

export const battleResult = (players) => {
  return players.sort((a, b) => b.totalScores - a.totalScores);
}

export const battle = (playersUsername) => {
  return Promise.all(
    Object.entries(playersUsername).map(([playerId, playerName]) => getData(playerName))
  )
    .then(players => battleResult(players))
    .catch(error => console.log(error));
}
