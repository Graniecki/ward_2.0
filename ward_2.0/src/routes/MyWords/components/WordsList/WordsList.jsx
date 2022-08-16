import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import wordsActions from "../../../../redux/words/wordsActions";
import "./WordsList.scss";

const WordsList = ({ onPassWord }) => {
  const dispatch = useDispatch();
  const words = useSelector(state => state.words);

  return (
    <ul className="words-list">
      {words.map((word) => (
        <li
          className={classNames("words-list__word", {
            "words-list__word--status-known": word.status === "known",
            "words-list__word--status-unknown": word.status === "unknown"
          })}
          key={word.id}
        >
          <div className="words-list__item">
            <p className="words-list__word-title">{word.translation}</p>
            <div className="words-list__buttons">
              <div className="words-list__knowledge-buttons">
                <button
                  onClick={() => dispatch(wordsActions.markAsKnown(word.id))}
                  className="words-list__known"
                  title="I know this word"
                />
                <button
                  onClick={() => dispatch(wordsActions.markAsUnknown(word.id))}
                  className="words-list__unknown"
                  title="I don't know this word"
                />
              </div>
              <button
                onClick={() => onPassWord(word)}
                className="words-list__more-info"
              >
                <span className="words-list__more-info--desktop">More info</span>
                <span className="words-list__more-info--mobile">?</span>
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default WordsList;
