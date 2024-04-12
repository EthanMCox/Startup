import React from "react";

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

  return (
    <div>
      <div className="card-game-container">
        <div className="card-game">Card Placeholder</div>
      </div>

      <div className="stat-bar container-fluid">
        <div className="stat-bar-input">
          <label for="restart"></label>
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
          <label for="round">Round: </label>
        </div>
        <div className="stat-bar-input">
          <input
            className="bg-dark text-light"
            type="text"
            id="round"
            value={round}
            readonly
          />
        </div>
        <div>
          <label for="lives">Lives: </label>
        </div>
        <div className="stat-bar-input">
          <input
            className="bg-dark text-light"
            type="text"
            id="lives"
            value={lives}
            readonly
          />
        </div>
        <div>
          <label for="score">Score: </label>
        </div>
        <div className="stat-bar-input">
          <input
            className="bg-dark text-light"
            type="text"
            id="score"
            value={score}
            readonly
          />
        </div>
      </div>
    </div>
  );
}
