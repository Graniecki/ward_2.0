import "./WordDetails.scss";

const WordDetails = ({ word }) => (
  <div className="word-details">
    <h2>{word.translation}</h2>
    <p>{word.transcription}</p>
    <p>{word.word}</p>

    <div>
      <p>Example:</p>
      <p>{word.example}</p>
    </div>
  </div>
);

export default WordDetails;
