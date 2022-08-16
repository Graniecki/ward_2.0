import { createReducer } from "@reduxjs/toolkit";
import data from '../../data/data';
import wordsActions from './wordsActions';

const updateWordStatus = (state, action, status) => {
  state.map(word => {
    const newWord = word;

    if (newWord.id === action.payload) {
      newWord.status = status;
    }
  
    return newWord;
  });
};

const wordsReducer = createReducer(data || [], {
  [wordsActions.removeWord]: (state, action) => state.filter(word => word.id !== action.payload),
  [wordsActions.markAsKnown]: (state, action) => updateWordStatus(state, action, 'known'),
  [wordsActions.markAsUnknown]: (state, action) => updateWordStatus(state, action, 'unknown'),
});

export default wordsReducer;
