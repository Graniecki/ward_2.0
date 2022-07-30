import classNames from "classnames";
import { useState } from "react";

import WordDetails from "./components/WordDetails/WordDetails";
import WordsList from "./components/WordsList/WordsList";
import "./MyWords.scss";

const MyWords = () => {
  const [wordPreview, setWordPreview] = useState(null);

  const onPassWord = (word) => {
    setWordPreview(word);
  };

  return (
    <div className="my-words">
      <h2 className="my-words__title">My words</h2>

      <div className="my-words__content">
        <div className="my-words__words">
          <WordsList
            wordPreview={wordPreview}
            onPassWord={onPassWord}
          />
        </div>

        <div className="my-words__details">
          <div className={classNames("my-words__details-wrapper", { "my-words__details-wrapper--active": wordPreview })}>
            {
              wordPreview 
                ? <WordDetails word={wordPreview} />
                : <p className="my-words__details-label">Click "More info" to see word details</p>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWords;
