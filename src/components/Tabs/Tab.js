import {useSearchParams} from "react-router-dom";

export const Tab = (props) => {
  let [searchParams, setSearchParams] = useSearchParams();

  const navigateTo = () => {
    setSearchParams({lang: props.tabText.toLowerCase()});
  }

  return (
    <div className={"tab mx-2 " + props.active} onClick={navigateTo}>{props.tabText}</div>
  );
};
