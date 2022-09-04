import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import classNames from "classnames";
import { useState, useRef, useEffect } from "react";

import { WordsList } from './components/WordsList/WordsList';
import WordDetails from "./components/WordDetails/WordDetails";
import "./Quiz.scss";

const Quiz = () => {
  const wordsCollection = collection(db, 'words');
  const [storeWords, setWordsCollection] = useState([]);

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
    setModalPosition(0);
  };

  const getPercentage = (sum, part) => {
    if (part === 0) {
      return 0;
    }

    return Math.round(part * 100 / sum);
  };

  const getWords = async () => {
    const data = await getDocs(wordsCollection);
    const normalizedData = data.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    setWordsCollection(normalizedData);
  };

  const updateWordStatus = (wordId, status) => {
    const updatedWords = storeWords.map(word => {
      if (word.id === wordId) {
        const newWord = {
          ...word,
          status,
        };

        return newWord;
      }

      return word;
    });

    setWordsCollection(updatedWords);
  };

  useEffect(() => {
    getWords();
  }, []);

  return (
    <div className="my-words">
      <div className="my-words__content">
        <div className="my-words__words">
          <WordsList
            words={storeWords}
            updateWordStatus={updateWordStatus}
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

export default Quiz;
