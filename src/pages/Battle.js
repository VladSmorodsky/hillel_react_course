import {Player} from "../components/Player";
import {useState} from "react";
import {PlayerPreview} from "../components/PlayerPreview";
import button from "bootstrap/js/src/button";
import {Link} from "react-router-dom";

export const Battle = () => {
  let [players, setPlayers] = useState({
    'player1': {
      username: '',
      avatar: ''
    },
    'player2': {
      username: '',
      avatar: ''
    },
    'player3': {
      username: '',
      avatar: ''
    }
  });
  let [playersId, setPlayersId] = useState(['player1', 'player2', 'player3']);
  let [playerNames, setPlayerNames] = useState([]);

  const submitPlayer = (id, username) => {
    setPlayers((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        username: username,
        avatar: `https://github.com/${username}.png?size=200`,
      }
    }));

    setPlayerNames((prevState) => ({
      ...prevState,
      [id]: username,
    }));
  }

  const resetPlayer = (id) => {
    setPlayers((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        username: '',
        avatar: '',
      }
    }));
  }

  const playersAreSelected = () => {
    const availablePlayer = playersId.filter( id => !!players[id].username );

    return availablePlayer.length === playersId.length;
  }

  const generateLinkState = (players) => {
    return playersId.map((playerId) => ({[playerId]: players[playerId].username}));
  }

  const showPlayerData = (id) => {
    if (!!players[id].username) {
      return <PlayerPreview
        key={id}
        avatar={players[id].avatar}
        username={players[id].username}>
        <button className={"reset"} onClick={() => resetPlayer(id)}>Reset</button>
      </PlayerPreview>
      ;
    }

    return <Player key={id} id={id} selectPlayer={submitPlayer} />
  }

  return (
    <>
      <div className="battle-container d-flex justify-content-around mt-4">
        {playersId.map(id => showPlayerData(id))}
      </div>
      <div className="container d-flex justify-content-center">
        <Link to="/battle/result"
              state={playerNames}
              className={`btn btn-primary ${!playersAreSelected() ? 'start-battle--disabled' : '' }`}>
          Start Battle
        </Link>
      </div>
    </>
  );
}
