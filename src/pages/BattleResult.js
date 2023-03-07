import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {battle} from "../api/githubApi";
import {PlayerPreview} from "../components/PlayerPreview";
import {Summary} from "../components/Summary";

export const BattleResult = () => {
  let [playersSummary, setPlayersSummary] = useState([]);
  let playerNames = useLocation();
  useEffect(() => {
    battle(playerNames.state)
      .then(players => {
        players[0].winner = true;
        setPlayersSummary(players);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className={"d-flex justify-content-around mt-4"}>
      {playersSummary.map(player => {
        let {id, avatar_url, login, location, company, followers, following, public_repos, blog} = player.profile;
        return (
          <PlayerPreview key={id} avatar={avatar_url} username={login}>
            <Summary key={id}
                     isWinner={player.winner}
                     starsCount={player.totalScores}
                     company={company}
                     location={location}
                     followers={followers}
                     following={following}
                     public_repos={public_repos}
                     blog={blog}
            />
          </PlayerPreview>
        );
      })}
    </div>
  );
}
