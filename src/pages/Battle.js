import {Player} from "../components/Player";
import {PlayerPreview} from "../components/PlayerPreview";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setPlayerAction} from "../state/profile/profile.slice";

export const Battle = () => {
  const dispatch = useDispatch();
  let players = useSelector(state => state.profileReducer.players);
  let playersId = useSelector(state => state.profileReducer.playersId);

  const resetPlayer = (id) => {
    dispatch(setPlayerAction({id: id, data: {
        username: '',
        avatar: '',
      }})
    );
  }

  const playersAreSelected = () => {
    const availablePlayer = playersId.filter( id => !!players[id].username );

    return availablePlayer.length === playersId.length;
  }

  const showPlayerData = (id) => {
    if (!!players[id].avatar) {
      return <PlayerPreview
        key={id}
        avatar={players[id].avatar}
        username={players[id].username}>
        <button className={"reset"} onClick={() => resetPlayer(id)}>Reset</button>
      </PlayerPreview>
      ;
    }

    return <Player key={id} id={id} />
  }

  return (
    <>
      <div className="battle-container d-flex justify-content-around mt-4">
        {playersId.map(id => showPlayerData(id))}
      </div>
      <div className="container d-flex justify-content-center">
        <Link to="/battle/result"
              className={`btn btn-primary ${!playersAreSelected() ? 'start-battle--disabled' : '' }`}
        >
          Start Battle
        </Link>
      </div>
    </>
  );
}
