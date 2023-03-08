export const Summary = (props) => {
  return (
    <div className={"d-flex flex-column"}>
      {Object.entries(props).map(([propKey, propValue]) => {
        return (
          <div key={propKey}>
            <p>{propKey}: {propValue !== null ? propValue : '-'}</p>
          </div>
        );
      })}
    </div>
  );
}
