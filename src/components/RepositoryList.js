import {memo, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../state/repository/repository.slice";

export const RepositoryList = memo(() => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(state => state.repositoryReducer.selectedLanguage);
  const error = useSelector(state => state.repositoryReducer.error);
  const loading = useSelector(state => state.repositoryReducer.loading);
  const repositories = useSelector(state => state.repositoryReducer.repositories);

  useEffect(() => {
    dispatch(getRepos(selectedLanguage));
  }, [selectedLanguage]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>
  }

  const showContent = () => {
    if (Array.isArray(repositories) && !repositories.length ) {
      return <p>Repositories not found.</p>
    }

    return (
      <ul className="popular-list">
        {repositories.map((repository, index) => (
          <li className="popular-item" key={repository.id}>
            <div className="popular-rank">
              {index+1}
              <ul className="space-list-items">
                <li>
                  <img className="avatar" src={repository.owner.avatar_url} alt="avatar"/>
                </li>
                <li>
                  <a href={repository.html_url} target="_blank">{repository.name}</a>
                </li>
                <li>
                  {repository.owner.login}
                </li>
                <li>
                  {repository.stargazers_count}
                </li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="popular-container">
      {showContent()}
    </div>
  );
});
