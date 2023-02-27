import {memo} from "react";

export const RepositoryList = memo((props) => {
  const showContent = () => {
    if (Array.isArray(props.repositories) && !props.repositories.length ) {
      return <p>Repositories not found.</p>
    }

    return (
      <ul className="popular-list">
        {props.repositories.map((repository, index) => (
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
