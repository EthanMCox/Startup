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
    <div className="card-game-container">
      <div className="card-game">
        Card Placeholder
      </div>
    </div>
  );
}
