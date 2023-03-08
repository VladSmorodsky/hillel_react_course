export const Summary = (props) => {
  return (
    <div className={"d-flex flex-column"}>
      {Object.entries(props).map(([propKey, propValue]) => {
        if (propKey === 'isWinner') {
          return propValue ? <h2 key={propKey} className={"text-success font-weight-bold"}>Winner</h2>
            : <h2 key={propKey} className={"text-danger font-weight-bold"}>Looser</h2>
        }
        return (
          <div key={propKey}>
            <p><b>{propKey}</b>: {propValue !== null ? propValue : '-'}</p>
          </div>
        );
      })}
    </div>
  );
}