import "./WordDetails.scss";

const WordDetails = ({ word }) => (
  <div className="word-details">
    <h2>{word.translation}</h2>
    <p>{word.transcription}</p>
    <p>{word.word}</p>

    {word.example && (
      <div>
        <p>Example:</p>
        <p><i>"{word.example}"</i></p>
      </div>
    )}
  </div>
);

export default WordDetails;
