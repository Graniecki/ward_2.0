import { connect } from "react-redux";
import classNames from "classnames";
import { useState, useRef } from "react";

import WordsList from "./components/WordsList/WordsList";
import WordDetails from "./components/WordDetails/WordDetails";
import "./MyWords.scss";

const MyWords = ({ storeWords }) => {
  const knownWordsCount = storeWords.filter(word => word.status === 'known').length;
  const unknownWordsCount = storeWords.filter(word => word.status === 'unknown').length;
  const markedWodsCount = knownWordsCount + unknownWordsCount;
  const [wordPreview, setWordPreview] = useState(null);
  
  const wordsStatistic = useRef(null);
  const [modalPosition, setModalPosition] = useState(-100);
  const [startTouchModal, setStartTouchModal] = useState(null);
  const [swipeModalPercent, setSwipeModalPercent] = useState(null);

  const onPassWord = (word) => {
    setWordPreview(word);
  };

  const getPercentage = (sum, part) => {
    if (part === 0) {
      return 0;
    }

    return Math.round(part * 100 / sum);
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

        <div
          ref={wordsStatistic}
          className="my-words__statistic"
          style={{ bottom: `${modalPosition}%` }}
          onTouchStart={(event) => setStartTouchModal(event.changedTouches[0].pageY)}
          onTouchMove={(event) => {
            if (event.currentTarget !== event.target) {
              return;
            }

            const { clientY } = event.changedTouches[0];
            const movedGesture = clientY - startTouchModal;
            const statisticHeight = wordsStatistic.current.offsetHeight;

            setSwipeModalPercent(Math.round((movedGesture * 100 / statisticHeight)));
            setModalPosition(swipeModalPercent * -1);

            if (swipeModalPercent >= 75) {
              setModalPosition(-100);
            }
          }}
          onTouchEnd={(event) => {
            if (event.currentTarget !== event.target) {
              return;
            }

            if (swipeModalPercent >= 20) {
              setModalPosition(-100);
            } else {
              setModalPosition(0);
            }
          }}
        >
          <div className="my-words__results-wrapper">
            <div className="my-words__results">
                <div className="my-words__results-cell">
                  <div className="my-words__results-title">Words</div>
                  <div className="my-words__results-value">{markedWodsCount} / {storeWords.length}</div>
                </div>
                <div className="my-words__results-cell">
                  <div className="my-words__results-title my-words__results-title--known">Known</div>
                  <div className="my-words__results-value">
                    {knownWordsCount}
                    {markedWodsCount > 0 && <span>&#8197;/ {getPercentage(markedWodsCount, knownWordsCount)}%</span>}
                  </div>
                </div>
                <div className="my-words__results-cell">
                  <div className="my-words__results-title my-words__results-title--unknown">Unknown</div>
                  <div className="my-words__results-value">
                    {unknownWordsCount}
                    {markedWodsCount > 0 && <span>&#8197;/ {100 - getPercentage(markedWodsCount, knownWordsCount)}%</span>}
                  </div>
                </div>
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
      </div>

      <button
        className="my-words__show-details-btn"
        type="button"
        onClick={() => setModalPosition(0)}
      >
        Show details
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  storeWords: state.words,
});

export default connect(mapStateToProps)(MyWords);
