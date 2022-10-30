import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import classNames from "classnames";
import { useState, useRef, useEffect, useReducer } from "react";
import { wordsReducer } from '../../reducers/wordsReducer';

import { WordsList } from './components/WordsList/WordsList';
import WordDetails from "./components/WordDetails/WordDetails";
import { ResultsTab } from './components/ResultsTab/ResultsTab';
import "./Quiz.scss";

const Quiz = () => {
  // const wordsCollection = collection(db, 'test');
  const wordsCollection = collection(db, 'words');
  const [storeWords, storeWordsDispatch] = useReducer(wordsReducer, []);


  const knownWordsCount = storeWords.filter(word => word.status === 'known').length;
  const unknownWordsCount = storeWords.filter(word => word.status === 'unknown').length;
  const markedWodsCount = knownWordsCount + unknownWordsCount;
  const [wordPreview, setWordPreview] = useState(null);

  const [order, setOrder] = useState('');
  const [type, setType] = useState('foreign');
  
  const wordsStatistic = useRef(null);
  const [modalPosition, setModalPosition] = useState(-100);
  const [startTouchModal, setStartTouchModal] = useState(null);
  const [swipeModalPercent, setSwipeModalPercent] = useState(null);

  const handleOrder = (event, callback) => {
    const { value } = event.currentTarget;

    callback(value);
    storeWordsDispatch({ type: `words/sort-${value}` });
  };

  const shuffleWords = (value) => {
    setOrder(value);
    storeWordsDispatch({ type: `words/sort-${value}` });
  };

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

    storeWordsDispatch({
      type: 'words/get-words',
      payload: {
        wordsList: normalizedData,
      },
    });
  };

  const updateWordStatus = (id, status) => {
    const action = {
      type: 'words/update-status',
      payload: {
        id,
        status,
      },
    };

    storeWordsDispatch(action);
  };

  useEffect(() => {
    getWords();
  }, []);

  return (
    <div className="my-words">
      <div className="my-words__content">
        <div className="my-words__words">

          <div className="my-words__settings">
            <div className='settings'>
              <select
                value={order}
                className='settings__select'
                name="order"
                onChange={(event) => handleOrder(event, setOrder)}
              >
                <option value="" disabled>Sort by</option>
                <option value="asc">Asc</option>
                <option value="desc">Desc</option>
                <option value="randomly">Randomly</option>
                <option value="newest">Newest - oldest</option>
                <option value="oldest">Oldest - newest</option>
              </select>

              <button onClick={() => shuffleWords('randomly')} type='button'>Shuffle</button>

              <select
                value={type}
                className='settings__select'
                name="type"
                onChange={(event) => setType(event.currentTarget.value)}
              >
                <option value="foreign">Foreign - native</option>
                <option value="native">Native - foreign</option>
              </select>
            </div>
          </div>

          <WordsList
            words={storeWords}
            type={type}
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
            <ResultsTab
              allWords={storeWords.length}
              markedWords={markedWodsCount}
              knownWords={knownWordsCount}
              knownPercentage={getPercentage(markedWodsCount, knownWordsCount)}
              unknownWords={unknownWordsCount}
              unknownPercentage={100 - getPercentage(markedWodsCount, knownWordsCount)}
            />

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
    </div>
  );
};

export default Quiz;
