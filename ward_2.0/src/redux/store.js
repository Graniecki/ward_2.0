import { configureStore } from "@reduxjs/toolkit";
import wordsReducer from './words/wordsReducer';

const store = configureStore({
  reducer: {
    words: wordsReducer,
  },
});

export default store;
