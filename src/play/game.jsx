import React from "react";
import { Card } from "./card";

import { Button } from "react-bootstrap";
import { delay } from "./delay";
import { GameEvent, GameEventNotifier } from "./gameNotifier";
import "./play.css";

export function MakeAMatchGame(props) {
  const userName = props.userName;
  const cards = new Map();

  const [GameNotifier, setGameNotifier] = React.useState(
    new GameEventNotifier(userName)
  );
  const [allowPlayer, setAllowPlayer] = React.useState(true);
  const [cardsflipped, setCardsFlipped] = React.useState([]);
  const [cardsmatched, setCardsMatched] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [lives, setLives] = React.useState(10);
  const [round, setRound] = React.useState(1);

  async function clickCard(cardID) {
    // Only execute if the player is allowed to flip the card
    console.log(cards.get(cardID));
    if (
      allowPlayer === false ||
      cards.get(cardID).ref.current.allowFlip() === false
    )
      return;
    const card = cards.get(cardID);
    // ensure players can't flip another card while this card flip executes
    setAllowPlayer(false);
    card.ref.current.updateAllowFlip(false);

    // Flip the card and add to cardsflipped array
    card.ref.current.updateFlipped(true);
    setCardsFlipped([...cardsflipped, card]);

    flipcard(card);
    await delay(800);

    // If two cards are flipped, check if they match. Flip them back and set lives to 1 less if they don't match. Otherwise, update the score and set cards to display none
    if (this.cardsflipped.length === 2) {
      if (this.cardsflipped[0].letter === this.cardsflipped[1].letter) {
        // Found a match
        this.cardsmatched = this.cardsmatched + 2;
        this.score = this.score + 1;
        this.updateScore();
        await delay(400);
        this.cardsflipped[0].el.style.display = "none"; // Change to something more elegant later if time
        this.cardsflipped[1].el.style.display = "none";
        this.cardsflipped[0].allowFlip = true;
        this.cardsflipped[1].allowFlip = true;
      } else {
        // No match
        this.lives = this.lives - 1;
        this.updatelives();
        this.cardsflipped[0].flipped = false;
        this.cardsflipped[1].flipped = false;
        this.flipcard(this.cardsflipped[0]);
        this.flipcard(this.cardsflipped[1]);
        await delay(1000);
        this.cardsflipped[0].allowFlip = true;
        this.cardsflipped[1].allowFlip = true;
      }
      this.cardsflipped = [];
    }

    // If all cards are matched, generate more cards and increment round
    if (this.cardsmatched === 12) {
      this.round = this.round + 1;
      this.updateround();
      await this.resetcards();
    }
    // If lives are 0, save the score and reset the game
    if (this.lives === 0) {
      this.saveScore(this.score);
      this.allowPlayer = true; // so that restart can run
      await this.restart();
    }
    this.allowPlayer = true;
  }


  for (let i = 0; i < 12; i++) {
    cards.set(i, { ref: React.useRef() });
  }

  const cardArray = Array.from(cards, ([key, cardData]) => {
    return (
      <Card
        key={key}
        ref={cardData.ref}
        clickCard={() => clickCard(key)}
      ></Card>
    );
  });

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
