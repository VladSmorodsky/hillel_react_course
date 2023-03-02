import {useState} from "react";

export const Player = (props) => {
  let [username, setUsername] = useState();

  const addPlayer = (event) => {
    event.preventDefault();
    props.selectPlayer(props.id, username);
  }

  return (
    <div>
      <form action=""
            className="d-flex flex-column"
            onSubmit={(event) => addPlayer(event)}
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