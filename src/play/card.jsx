import React from "react";

export const Card = React.forwardRef(({ clickCard }, ref) => {
  const [letter, setLetter] = React.useState("A");
  const [allowflip, setAllowflip] = React.useState(true);
  const [flipped, setFlipped] = React.useState(false);
  const [matched, setMatched] = React.useState(false);

  React.useImperativeHandle(ref, () => ({
    updateFlipped(bool) {
      setFlipped(bool);
    },
    updateLetter(letter) {
      setLetter(letter);
    },
    updateAllowFlip(bool) {
      setAllowflip(bool);
    },
    allowFlip() {
      return allowflip;
    },
    flipped() {
      return flipped;
    },
    getLetter() {
      return letter;
    },
    matched(bool) {
      setMatched(bool);
    },
  }));

  // Check if key is needed to be passed in
  return (
    <div className="card-center">
      <div className="card">
        <div
          className={`card-inner ${flipped ? "flipped" : ""}`}
          style={matched ? { display: "none" } : {}}
          onClick={() => clickCard()}
        >
          <div className="transparent">
            <img className="card-img-top" src="/card.jpg" alt="playing_card" />
          </div>
          <div className="card-front">
            <img className="card-img-top" src="/card.jpg" alt="playing_card" />
          </div>
          <div className="card-back">
            <div>
              <p className="card-back-text">{letter}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
