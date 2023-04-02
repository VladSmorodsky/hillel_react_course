import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {getRepos, searchRepos} from "../state/repository/repository.slice";

const allowSymbols = /^[A-Za-z]+$/;

export const Search = () => {
  const dispatch = useDispatch();

  let [validationError, setValidationError] = useState(null);
  let [searchRepoQuery, setSearchRepoQuery] = useState('');

  useEffect(() => {
    setValidationError(null);
    if (!allowSymbols.test(searchRepoQuery) && searchRepoQuery !== "") {
      setValidationError('Use only latin characters');
      return;
    }

    if (searchRepoQuery === "") {
      dispatch(getRepos());
      return;
    }

    const searchRepo = setTimeout(() => {
      dispatch(searchRepos(searchRepoQuery));
    }, 2000);

    return () => clearTimeout(searchRepo);
  }, [searchRepoQuery]);

  const clearInput = (event) => {
    if(event.key === "Escape") {
      setSearchRepoQuery("");
    }
  }

  return (
    <div className="search-container">
      <input type="text"
             className={validationError ? 'validation-error' : ''}
             value={searchRepoQuery}
             onChange={(event) => setSearchRepoQuery(event.target.value)}
             onKeyDown={(event) => clearInput(event)}
             placeholder="Search repo..."
      />
      {validationError ? <span className="validation-error-message">{validationError}</span> : null}
    </div>
  );
}
