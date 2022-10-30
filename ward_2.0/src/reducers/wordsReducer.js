const updateStatus = (array, payload) => {
  const { id, status } = payload;
  const updatedArray = array.map(word => {
    if (word.id === id) {
      return {
        ...word,
        status,
      }
    }

    return word;
  });

  return updatedArray;
};

export const wordsReducer = (words, { type, payload }) => {
  switch (type) {
    case 'words/get-words':
      return [...payload.wordsList].sort((a, b) => b.createdDate.seconds - a.createdDate.seconds);
    case 'words/sort-asc':
      return [...words].sort((a, b) => a.word.localeCompare(b.word));
    case 'words/sort-desc':
      return [...words].sort((a, b) => b.word.localeCompare(a.word));
    case 'words/sort-randomly':
      return [...words].sort(() => Math.random() - 0.5);
    case 'words/sort-newest':
      return [...words].sort((a, b) => b.createdDate.seconds - a.createdDate.seconds);
    case 'words/sort-oldest':
      return [...words].sort((a, b) => a.createdDate.seconds - b.createdDate.seconds);
    case 'words/update-status':
      return updateStatus(words, payload);
    default:
      return words;
  }
};
