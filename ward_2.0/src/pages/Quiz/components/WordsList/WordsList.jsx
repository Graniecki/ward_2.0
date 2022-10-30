import classNames from "classnames";
import "./WordsList.scss";

export const WordsList = ({ words, type, updateWordStatus, onPassWord }) => {
  const today = new Date();
  const newestRange = 72; // 3 days

  const isNewWord = (createdDate) => {
    const milliseconds = createdDate * 1000;
    const hoursDifference = (today - milliseconds) / 1000 / 3600;

    return !(hoursDifference > newestRange);
  };

  return (
    <ul className="words-list">
      {words.map((word) => (
        <li
          className={classNames("words-list__word", {
            "words-list__word--status-known": word.status === "known",
            "words-list__word--status-unknown": word.status === "unknown",
            "words-list__word--status-new": isNewWord(word.createdDate.seconds),
          })}
          key={word.id}
        >
          <div className="words-list__item">
            <p className="words-list__word-title">{type === 'native' ? word.translation : word.word}</p>
            <div className="words-list__buttons">
              <div className="words-list__knowledge-buttons">
                <button
                  onClick={() => updateWordStatus(word.id, 'known')}
                  className="words-list__known"
                  title="I know this word"
                />
                <button
                  onClick={() => updateWordStatus(word.id, 'unknown')}
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
