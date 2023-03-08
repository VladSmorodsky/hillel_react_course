export const BattleStatus = (props) =>
  props.isWinner
    ? <h2 className={"text-success font-weight-bold"}>Winner</h2>
    : <h2 className={"text-danger font-weight-bold"}>Looser</h2>
