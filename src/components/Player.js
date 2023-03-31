import {useState} from "react";
import {setPlayerAction, setUsernameAction} from "../state/profile/profile.action";
import {useDispatch} from "react-redux";

export const Player = (props) => {
  const dispatch = useDispatch();
  let [username, setUsername] = useState();

  const submitPlayer = (event) => {
    event.preventDefault();
    dispatch(setPlayerAction({id: props.id, data: {
        username: username,
        avatar: `https://github.com/${username}.png?size=200`,
      }})
    );
    dispatch(setUsernameAction({id: props.id, username: username}))
  }

  return (
    <div>
      <form action=""
            className="d-flex flex-column"
            onSubmit={(event) => submitPlayer(event)}
      >
        <input type="text"
               placeholder="Github username"
               className="mb-2"
               onChange={(event) => setUsername(event.target.value)}
        />
        <button className="btn btn-dark" disabled={!username}>Add player</button>
      </form>
    </div>
  );
}
