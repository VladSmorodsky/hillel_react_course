export const Summary = (props) => {
  return (
    <div className={"d-flex flex-column"}>
      {Object.entries(props).map(([propKey, propValue]) => {
        if (propKey === 'isWinner') {
          return propValue ? <p className={"text-success font-weight-bold"}>Winner</p>
            : <p className={"text-danger font-weight-bold"}>Looser</p>
        }
        return (
          <div>
            <p>{propKey}: {propValue !== null ? propValue : '-'}</p>
          </div>
        );
      })}
    </div>
  );
}