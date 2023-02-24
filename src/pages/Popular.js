import {useEffect, useState} from "react";
import {fetchPopularRepositories, fetchSearchResult} from "../api/githubApi";
import {LanguageList} from "../components/LanguageList";
import {RepositoryList} from "../components/RepositoryList";
import {useSearchParams} from "react-router-dom";

const languages = ["All", 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
const allowSymbols = /[A-Za-z]+/g;

export const Popular = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  let [searchResultRepo, setSearchResultRepo] = useState([]);
  let [searchRepoQuery, setSearchRepoQuery] = useState('');
  let [isSearching, setIsSearching] = useState(false);
  let [validationError, setValidationError] = useState(null);

  let [repositories, setRepositories] = useState(null);
  let [error, setError] = useState(null);
  let [loading, setLoading] = useState(false)

  let selectedLanguage =  searchParams.get('lang');

  useEffect(() => {
    setLoading(true);
    if (!selectedLanguage || !languages.includes(selectedLanguage)) {
      setSearchParams({lang: 'All'});
    }
    try {
      const getRepoData = async () => {
        const repositories = await fetchPopularRepositories(selectedLanguage);
        setLoading(false);
        setRepositories(repositories);
      };

      getRepoData();
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [selectedLanguage]);

  useEffect(() => {
    setIsSearching(true);
    setValidationError(null);

    if (!allowSymbols.test(searchRepoQuery) && searchRepoQuery !== "") {
      setValidationError('Use only latin characters');
      return;
    }

    if (searchRepoQuery === "") {
      setIsSearching(false);
      return;
    }

    setLoading(true);

    const searchRepo = setTimeout(() => {
      fetchSearchResult(searchRepoQuery)
        .then(resultItems => {
          setSearchResultRepo(resultItems);
        }).catch((error) => setError(error))
        .finally(() => {
          setLoading(false);
        });
    }, 2000);

    return () => {
      clearTimeout(searchRepo);
    }
  }, [searchRepoQuery]);

  const clearInput = (event) => {
    if(event.key === "Escape") {
      setSearchRepoQuery("");
    }
  }

  const showContent = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>{error}</p>
    }

    if (searchRepoQuery.length && isSearching && validationError === null) {
      return <RepositoryList repositories={searchResultRepo} />;
    }

    return repositories?.length ? <RepositoryList repositories={repositories} /> : null;
  }

  return (
    <>
      <div className="container d-flex align-items-center justify-content-between">
        <LanguageList languages={languages}
                      selectedLanguage={selectedLanguage}
                      setSearchParams={setSearchParams}
        />
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
      </div>
      {showContent()}
    </>
  );
}

