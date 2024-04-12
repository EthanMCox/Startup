import React from "react";
import { Card } from "./card";

import { Button } from "react-bootstrap";
import { delay } from "./delay";
import { GameEvent, GameEventNotifier } from "./gameNotifier";
import "./play.css";

export function MakeAMatchGame(props) {
  const userName = props.userName;
  const cards = new Map();

  const [allowPlayer, setAllowPlayer] = React.useState(true);
  const [cardsflipped, setCardsFlipped] = React.useState([]);
  const [cardsmatched, setCardsMatched] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [lives, setLives] = React.useState(10);
  const [round, setRound] = React.useState(1);

    async function clickCard(cardID) {
        return; // Placeholder
    }


  for (let i = 0; i < 12; i++) {
    cards.set(i, { letter: "A", flipped: false, allowFlip: true, ref: React.useRef() });
  }

  const cardArray = Array.from(cards, (key, cardData)  => {
    return <Card key={key} ref={cardData.ref} clickCard={() => clickCard(key)}></Card>
  })

  return (
    <>
      <div className="card-game-container">
        <div className="card-game">{cardArray}</div>
      </div>

      <div className="stat-bar container-fluid">
        <div className="stat-bar-input">
          <label htmlFor="restart"></label>
        </div>
        <div className="stat-bar-input">
          <input
            className="btn btn-outline-dark btn-sm"
            type="button"
            id="restart"
            value="Restart"
          />
        </div>
        <div>
          <label htmlFor="round">Round: </label>
        </div>
        <div className="stat-bar-input">
          <input
            className="bg-dark text-light"
            type="text"
            id="round"
            value={round}
            readOnly
          />
        </div>
        <div>
          <label htmlFor="lives">Lives: </label>
        </div>
        <div className="stat-bar-input">
          <input
            className="bg-dark text-light"
            type="text"
            id="lives"
            value={lives}
            readOnly
          />
        </div>
        <div>
          <label htmlFor="score">Score: </label>
        </div>
        <div className="stat-bar-input">
          <input
            className="bg-dark text-light"
            type="text"
            id="score"
            value={score}
            readOnly
          />
        </div>
      </div>
    </>
  );
}
