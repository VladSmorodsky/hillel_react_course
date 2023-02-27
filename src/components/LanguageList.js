import {memo} from "react";

export const LanguageList = memo((props) => {
  return (
    <ul className="languages">
      {props.languages.map((language, index) => {
        return (
          <li key={index}
              className={ language === props.selectedLanguage ? 'language__active' : ''}
              onClick={() => props.setSearchParams({lang: language})}
          >{language}</li>
        )
      })}
    </ul>
  );
});
