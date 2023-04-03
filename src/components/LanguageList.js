import {memo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setLanguageAction} from "../state/repository/repository.slice";

const languages = ["All", 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

export const LanguageList = memo(() => {
  const selectedLanguage = useSelector(state => state.repositoryReducer.selectedLanguage);
  const dispatch = useDispatch();

  const setLanguage = (language) => {
    dispatch(setLanguageAction(language));
  }

  return (
    <ul className="languages">
      {languages.map((language, index) => {
        return (
          <li key={index}
              className={ language === selectedLanguage ? 'language__active' : ''}
              onClick={() => setLanguage(language)}
          >{language}</li>
        )
      })}
    </ul>
  );
});
