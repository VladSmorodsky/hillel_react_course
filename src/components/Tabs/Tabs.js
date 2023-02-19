import {Tab} from "./Tab";
import {useSearchParams} from "react-router-dom";

const tabContent = ["All", 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

export const Tabs = () => {
  let [searchParams] = useSearchParams();
  const isActive = (tabText) => tabText.toLowerCase() === searchParams.get('lang') ;

  return (
    <ul className="tab-container">
      {tabContent.map((tab, index) =>
        <li key={index}>
          <Tab tabText={tab} active={isActive(tab) ? 'tab__active' : ''}/>
        </li>
      )}
    </ul>
  );
}
