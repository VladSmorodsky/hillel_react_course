import {Children} from "react";

export const PlayerPreview = (props) => {
  let {children, avatar} = props;

  const renderChildren = (name) => {
    return Children.toArray(children).map(child => {
      if (child.type?.name === name || child.type === name.toLowerCase()) {
        return child;
      }
    })
  }

  return (
    <div className="player-preview">
      <div className="column">
        {renderChildren('BattleStatus')}
        <img className="avatar" src={avatar} alt="Avatar"/>
        <h2 className="username">{props.username}</h2>
        {renderChildren('Summary')}
      </div>
      {renderChildren('Button')}
    </div>
  );
}
