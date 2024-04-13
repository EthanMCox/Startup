import React, { useRef } from "react";
import { Card } from "./card";

import { delay } from "./delay";
import { GameEvent, GameEventNotifier } from "./gameNotifier";
import "./play.css";

const backtexts = [
  { letter: "A" },
  { letter: "B" },
  { letter: "C" },
  { letter: "D" },
  { letter: "E" },
  { letter: "F" },
  { letter: "A" },
  { letter: "B" },
  { letter: "C" },
  { letter: "D" },
  { letter: "E" },
  { letter: "F" },
];

let shuffled;

function shufflealgorithm(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

export function MakeAMatchGame(props) {
  const userName = props.userName;
  const cards = new Map();

  const [GameNotifier, setGameNotifier] = React.useState(
    new GameEventNotifier(userName)
  );
  const [allowPlayer, setAllowPlayer] = React.useState(true);
  //   const [cardsFlipped, setCardsFlipped] = React.useState([]);
  const cardsFlipped = useRef([]);
  const cardsMatched = useRef(0);
  const [score, setScore] = React.useState(0);
  const [lives, setLives] = React.useState(10);
  const [round, setRound] = React.useState(1);
  const liveLives = useRef(10);

  async function clickCard(cardID) {
    // Only execute if the player is allowed to flip the card
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
    cardsFlipped.current = [...cardsFlipped.current, cardID];

    await delay(800);

    // If two cards are flipped, check if they match. Flip them back and set lives to 1 less if they don't match. Otherwise, update the score and set cards to display none
    if (cardsFlipped.current.length === 2) {
      if (
        // Check if letters match
        cards.get(cardsFlipped.current[0]).ref.current.getLetter() ===
        cards.get(cardsFlipped.current[1]).ref.current.getLetter()
      ) {
        // Found a match
        cardsMatched.current = cardsMatched.current + 2;
        setScore(score + 1);
        await delay(400);
        // Show that cards match so that they display none
        cards.get(cardsFlipped.current[0]).ref.current.matched(true); // Change to something more elegant later if time
        cards.get(cardsFlipped.current[1]).ref.current.matched(true);
        // Allow the cards to be flipped again
        cards.get(cardsFlipped.current[0]).ref.current.updateAllowFlip(true);
        cards.get(cardsFlipped.current[1]).ref.current.updateAllowFlip(true);
      } else {
        // No match
        setLives(lives - 1);
        liveLives.current = liveLives.current - 1;
        // Flip the cards back over
        cards.get(cardsFlipped.current[0]).ref.current.updateFlipped(false);
        cards.get(cardsFlipped.current[1]).ref.current.updateFlipped(false);
        await delay(1000);
        // Allow the cards to be flipped again
        cards.get(cardsFlipped.current[0]).ref.current.updateAllowFlip(true);
        cards.get(cardsFlipped.current[1]).ref.current.updateAllowFlip(true);
      }
      // Reset the cardsFlipped array
      cardsFlipped.current = [];
    }

    // If all cards are matched, generate more cards and increment round
    if (cardsMatched.current === 12) {
      setRound(round + 1);
      await resetcards(); 
    }
    // If lives are 0, save the score and reset the game
    if (liveLives.current === 0) {
        saveScore(score);
        setAllowPlayer(true); // so that restart can run
        await restart();
    }
    setAllowPlayer(true);
  }

  async function resetcards() {
    setAllowPlayer(false);
    cards.forEach((cardData) => {
      cardData.ref.current.matched(true);
      cardData.ref.current.updateAllowFlip(false);
      cardData.ref.current.updateFlipped(false);
    });
    await delay(800);

    shuffle();
    for (let i = 0; i < 12; i++) {
      let card = cards.get(i);
      card.ref.current.updateLetter(shuffled[i].letter);
      card.ref.current.matched(false);
      card.ref.current.updateAllowFlip(true);
    }
    cardsFlipped.current = [];
    cardsMatched.current = 0;
    setAllowPlayer(true);
  }

  async function restart() {
    if (allowPlayer === false) return;
    setAllowPlayer(false);

    // Updates score to be "--"
    setScore(0);
    setLives(10);
    liveLives.current = 10;
    setRound(1);

    resetcards();
    GameNotifier.broadcastEvent(userName, GameEvent.Start, {});
  }

  async function saveScore(score) {
    const date = new Date().toLocaleDateString();
    const newScore = { name: userName, score: score, date: date };

    try {
      const response = await fetch('/api/score', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(newScore),
      });

      // Let other players know the game has concluded
      GameNotifier.broadcastEvent(userName, GameEvent.End, newScore);

      // Store what the service gave us as the high scores
      const scores = await response.json();
      localStorage.setItem('scores', JSON.stringify(scores));
    } catch {
      // If there was an error then just track scores locally
      updateScoresLocal(newScore);
    }
  }

  function updateScoresLocal(newScore) {
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (!!scoresText && scoresText !== "undefined") {
        scores = JSON.parse(scoresText);
      }

    let found = false;
    for (const [i, prevScore] of scores.entries()) {
      if (newScore > prevScore.score) {
        scores.splice(i, 0, newScore);
        found = true;
        break;
      }
    }

    if (!found) {
      scores.push(newScore);
    }

    if (scores.length > 10) {
      scores.length = 10;
    }

    localStorage.setItem('scores', JSON.stringify(scores));
  }

  function shuffle() {
    shuffled = shufflealgorithm(backtexts);
  }

  // Create and map the cards
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

  // Shuffle the letters when cards are rendered
  React.useEffect(() => {
    shuffle();
    for (let i = 0; i < 12; i++) {
      let card = cards.get(i);
      card.ref.current.updateLetter(shuffled[i].letter);
    }
  }, []);

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
            onClick={restart}
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
            value={score === 0 ? "--" : score}
            readOnly
          />
        </div>
      </div>
    </>
  );
}
