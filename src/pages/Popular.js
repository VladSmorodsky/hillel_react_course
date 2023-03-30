import {LanguageList} from "../components/LanguageList";
import {RepositoryList} from "../components/RepositoryList";
import {Search} from "../components/Search";

export const Popular = () => {
  return (
    <>
      <div className="container d-flex align-items-center justify-content-between">
        <LanguageList />
        <Search />
      </div>
      <RepositoryList />
    </>
  );
}
