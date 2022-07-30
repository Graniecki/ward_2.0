import { createAction } from "@reduxjs/toolkit";

const removeWord = createAction('words/remove');

const markAsKnown = createAction('words/mark-as-known');

const markAsUnknown = createAction('words/mark-as-unknown');

export default { removeWord, markAsKnown, markAsUnknown };
