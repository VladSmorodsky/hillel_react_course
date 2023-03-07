export const Summary = (props) => {
  return (
    <div className={"d-flex flex-column"}>
      {Object.entries(props).map(([propKey, propValue]) => {
        console.log('[props]', propKey, propValue);
        return (
          <div>
            <p>{propKey}: {propValue !== null ? propValue : '-'}</p>
          </div>
        );
      })}
    </div>
  );
}