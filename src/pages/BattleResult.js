import {useEffect} from "react";
import {Link} from "react-router-dom";
import {PlayerPreview} from "../components/PlayerPreview";
import {Summary} from "../components/Summary";
import {Loader} from "../components/Loader";
import {Error} from "../components/Error";
import {BattleStatus} from "../components/BattleStatus";
import {useDispatch, useSelector} from "react-redux";
import {getBattleResult} from "../state/profile/profile.slice";

export const BattleResult = () => {

  const dispatch = useDispatch();

  const usernames = useSelector(state => state.profileReducer.usernames);
  let playersSummary = useSelector(state => state.profileReducer.playersSummary);
  let error = useSelector(state => state.repositoryReducer.error);
  let loading = useSelector(state => state.repositoryReducer.loading);

  useEffect(() => {
    dispatch(getBattleResult(usernames));
  }, []);

  const showContent = () => {
    if (loading) {
      return <Loader>Loading...</Loader>
    }

    if (error) {
      return <Error>{error}. <Link to={'/battle'}>Try to battle again</Link></Error>;
    }

    return (
      <div className={"d-flex justify-content-around mt-4"}>
        {Object.entries(playersSummary).map(([key, playerSummary]) => {
          let {id, avatar_url, login, location, company, followers, following, public_repos, blog} = playerSummary.profile;
          return (
            <PlayerPreview key={id}
                           avatar={avatar_url}
                           username={login}
            >
              <BattleStatus isWinner={playerSummary.winner} />
              <Summary key={id}
                       starsCount={playerSummary.totalScores}
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

  return (
    showContent()
  );
}
