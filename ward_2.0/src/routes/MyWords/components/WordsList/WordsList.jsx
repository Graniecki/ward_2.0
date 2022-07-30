import classNames from "classnames";
import { connect } from "react-redux";
import wordsActions from "../../../../redux/words/wordsActions";
import "./WordsList.scss";

const WordsList = (state) => {
  const { words, onRemoveWord, onMarkAsKnown, onMarkAsUnknown, wordPreview, onPassWord } = state;

  const onRemoveWordHandler = (id) => {
    onRemoveWord(id);

    if (wordPreview.id === id) {
      onPassWord(null);
    }
  };

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
                <button onClick={() => onMarkAsKnown(word.id, 'known')} className="words-list__known" />
                <button onClick={() => onMarkAsUnknown(word.id, 'unknown')} className="words-list__unknown" />
              </div>
              <button
                onClick={() => onPassWord(word)}
                className="words-list__more-info"
              >
                More info
              </button>
              <button
                onClick={() => onRemoveWordHandler(word.id)}
                className="words-list__remove-btn"
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  words: state.words
});

const mapDispatchToProps = {
  onRemoveWord: wordsActions.removeWord,
  onMarkAsKnown: wordsActions.markAsKnown,
  onMarkAsUnknown: wordsActions.markAsUnknown,
};

export default connect(mapStateToProps, mapDispatchToProps)(WordsList);
