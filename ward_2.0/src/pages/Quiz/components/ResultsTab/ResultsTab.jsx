import './ResultsTab.scss';

export const ResultsTab = ({ allWords, markedWords, knownWords, knownPercentage, unknownWords, unknownPercentage }) => {
  return (
    <div className="results">
      <div className="results__cell">
        <div className="results__title">Words</div>
        <div className="results__value">
          {markedWords} / {allWords}
        </div>
      </div>
      <div className="results__cell">
        <div className="results__title results__title--known">
          Known
        </div>
        <div className="results__value">
          {knownWords}
          {markedWords > 0 && (
            <span>
              &#8197;/ {knownPercentage}%
            </span>
          )}
        </div>
      </div>
      <div className="results__cell">
        <div className="results__title results__title--unknown">
          Unknown
        </div>
        <div className="results__value">
          {unknownWords}
          {markedWords > 0 && (
            <span>
              &#8197;/ {unknownPercentage}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
