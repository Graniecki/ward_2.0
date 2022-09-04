import { collection, getDocs, addDoc } from 'firebase/firestore';
import { useState, useEffect, useRef } from 'react';
import { db } from '../../firebaseConfig';
import './Vocabulary.scss';

export const Vocabulary = () => {
  const wordsCollection = collection(db, 'words');

  const wordInput = useRef(null);
  const translationInput = useRef(null);

  const [word, setWord] = useState('');
  const [translation, setTranslation] = useState('');
  const [transcription, setTranscription] = useState('');
  const [example, setExample] = useState('');
  const [words, setWords] = useState([]);

  const getWords = async () => {
    const data = await getDocs(wordsCollection);
    const normalizedData = data.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    setWords(normalizedData);
  };

  const addWord = async (newWord) => {
    await addDoc(wordsCollection, newWord);
  };

  const onInputChange = (event, callback) => {
    callback(event.currentTarget.value);
  };

  const validateField = (condition, field, errorClass) => {
    if (condition) {
      field.current.classList.add(errorClass);
    } else {
      field.current.classList.remove(errorClass);
    }
  };

  const clearForm = () => {
    setWord('');
    setTranslation('');
    setTranscription('');
    setExample('');
  };

  const submitForm = (event) => {
    event.preventDefault();

    const newWord = {
      word: word.trim(),
      translation: translation.trim(),
      transcription: transcription.trim(),
      example: example.trim(),
      createdDate: new Date(),
      status: null
    };

    validateField(!word.trim(), wordInput, 'vocabulary__form-input-wrapper--required');
    validateField(!translation.trim(), translationInput, 'vocabulary__form-input-wrapper--required');

    if (word.trim() && translation.trim()) {
      addWord(newWord);
      clearForm();
      getWords();
    }
  };

  const secondsToDate = (seconds) => {
    const milliseconds = seconds * 1000;
    const zeroUTCDate = new Date(milliseconds).toISOString();

    return new Date(zeroUTCDate);
  };

  useEffect(() => {
    getWords();
  }, []);





  const oneDay = 24 * 60 * 60 * 1000; // if difference <= oneDay then add new word label
                                      // currentDate - createdBy <= oneDay
                                      

  // console.log(words[1]);

  const seconds = 1662228844;

  // console.log(new Date(seconds * 1000).toISOString());




  return (
    <div className='vocabulary'>
      <div className='vocabulary__content'>
        <div className='vocabulary__words-list'>
          {words.map(word => (
            <div
              key={word.id}
              className='vocabulary__word'
            >
              {word.translation}
            </div>
          ))}
        </div>


        <div>
          <form className='vocabulary__form' onSubmit={submitForm}>
            <div className='vocabulary__form-input-wrapper' ref={wordInput}>
              <input
                className='vocabulary__form-input'
                value={word}
                onChange={(event) => onInputChange(event, setWord)}
                type="text"
                placeholder='Foreign word*'
              />
            </div>
            <div className='vocabulary__form-input-wrapper'>
              <input
                className='vocabulary__form-input'
                value={transcription} 
                onChange={(event) => onInputChange(event, setTranscription)}
                type="text"
                placeholder='Transcription'
              />
            </div>
            <div className='vocabulary__form-input-wrapper' ref={translationInput}>
              <input
                className='vocabulary__form-input'
                value={translation}
                onChange={(event) => onInputChange(event, setTranslation)}
                type="text"
                placeholder='Translation*'
              />
            </div>
            <div className='vocabulary__form-input-wrapper'>
              <textarea
                className='vocabulary__form-text-area'
                value={example}
                onChange={(event) => onInputChange(event, setExample)}
                type="text"
                placeholder='Example of usage'
              />
            </div>
            <button className='vocabulary__form-submit'>Add word</button>
          </form>
        </div>

      </div>
    </div>
  );
};
