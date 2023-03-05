export const PlayerPreview = (props) => {
  return (
    <div className="player-preview">
      <div className="column">
        <img className="avatar" src={props.avatar} alt="Avatar"/>
        <h2 className="username">{props.username}</h2>
      </div>
      {props.children}
    </div>
  );
}