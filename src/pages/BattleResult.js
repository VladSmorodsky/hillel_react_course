import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {battle} from "../api/githubApi";

export const BattleResult = () => {
  let [playersSummary, setPlayersSummary] = useState({});
  let playerNames = useLocation();
  useEffect(() => {
    battle(playerNames.state)
      .then(players => {
        players[0].winner = true;
        setPlayersSummary((prevState) => ({
          ...prevState,
          players
        }));
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>Battle Result:</div>
  );
}
