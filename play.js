let game;

const backtexts = [
  {letter: "A"},
  {letter: "B"},
  {letter: "C"},
  {letter: "D"},
  {letter: "E"},
  {letter: "F"},
  {letter: "A"},
  {letter: "B"},
  {letter: "C"},
  {letter: "D"},
  {letter: "E"},
  {letter: "F"},
]

let shuffled;

class Card {
  allowFlip;
  el;
  letter;
  cardInner;
  flipped;

  constructor(letter, el) {
    this.el = el;
    this.letter = letter;
    this.allowFlip = true;
    this.flipped = false;
    this.cardInner = el.querySelector('.card-inner');
    el.addEventListener("click", () => {
      game.clickcard(this);
    });
    this.updateBack();
  }

  updateBack() {
    const cardBackText = this.el.querySelector('.card-back-text');
    cardBackText.textContent = this.letter;
  }

  updateLetter() {
    return; // Placeholder
  }

}

class Game {
  cards;
  allowPlayer;
  cardsflipped;
  cardsmatched;
  score;
  lives;
  round;

  constructor() {
    this.allowPlayer = true;
    this.cards = new Map();
    this.cardsflipped = []
    this.cardsmatched = 0;
    this.score = 0
    this.lives = 10;
    this.round = 1;

    // Create the card
    this.shuffle();
    document.querySelectorAll('.card').forEach((el, i) => {
      if (i < shuffled.length) {
        this.cards.set(el.id, new Card(shuffled[i].letter, el));
      }
    });

    const playerNameEl = document.querySelector('.player-name');
    playerNameEl.textContent = this.getPlayerName();
  }

  updatelives() {
    const livesEl = document.querySelector('#lives');
    livesEl.value = this.lives;
  }

  updateround() {
    const roundEl = document.querySelector('#round');
    roundEl.value = this.round;
  }

  updateScore() {
    const scoreEl = document.querySelector('#score');
    scoreEl.value = this.score;
  }

  getPlayerName() {
    return localStorage.getItem('userName') ?? 'Mystery Player';
  }

  async clickcard(card) {
    // Only execute if the player is allowed to flip the card
    if (this.allowPlayer === false || card.allowFlip === false) return;
    // ensure players can't flip another card while this card flip executes
    this.allowPlayer = false;
    card.allowFlip = false;

    // Flip the card and add to cardsflipped array
    card.flipped = true;
    this.cardsflipped.push(card);
    this.flipcard(card);
    await delay(800);

    // If two cards are flipped, check if they match. Flip them back and set lives to 1 less if they don't match. Otherwise, update the score and set cards to display none
    if (this.cardsflipped.length === 2) { 
      if (this.cardsflipped[0].letter === this.cardsflipped[1].letter) { // Found a match
        this.cardsmatched = this.cardsmatched + 2;
        this.score = this.score + 1;
        this.updateScore();
        await delay(400);
        this.cardsflipped[0].el.style.display = "none"; // Change to something more elegant later if time
        this.cardsflipped[1].el.style.display = "none";
        this.cardsflipped[0].allowFlip = true;
        this.cardsflipped[1].allowFlip = true;
      }
      else { // No match
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

  flipcard(card) {
    card.el.querySelector('.card-inner').classList.toggle("flipped");
  }

  shuffle() {
    shuffled = shufflealgorithm(backtexts)
  }

  async resetcards() {
    this.allowPlayer = false;
    this.cards.forEach(card => {
      card.el.style.display = "none";
      if (card.flipped) {
        this.flipcard(card);
        card.flipped = false;
      }
    });
    await delay(800);
    this.shuffle();
    let i = 0;
    this.cards.forEach(card => {
      card.letter = shuffled[i].letter;
      card.updateBack();
      card.el.style.display = "";
      i++;
      card.allowFlip = true;
    })
    this.cardsflipped = [];
    this.cardsmatched = 0;
    this.allowPlayer = true;
  }

  saveScore(score) {
    const username = this.getPlayerName();
    // Initialize a scores array
    let scores = [];
    // Get the scores from local storage
    const scoresText = localStorage.getItem('scores');
    // If there are scores in local storage, replace the empty array with those scores
    if (!!scoresText && scoresText !== "undefined") {
      scores = JSON.parse(scoresText);
    }
    // Update the scores array based on the current user's new score
    scores = this.updateScores(username, score, scores);
    localStorage.setItem('scores', JSON.stringify(scores));
  }

  updateScores(username, score, scores) {
    // Get the current date based on user's location
    const date = new Date().toLocaleDateString();
    // Initialize a new score object using user's score
    const newScore = { name: username, score: score, date: date };
    
    let found = false;
    for (const[i, prevScore] of scores.entries()) {
      // If the score is greater than previous score in that spot in the list
      // Then we should insert the new score at that spot
      if (score > prevScore.score) {
        scores.splice(i, 0, newScore);
        found = true;
        break;
      }
    }
    // If the score hasn't already been inserted, insert it at the end of the list
    if (!found) {
      scores.push(newScore);
    }

    // If the list is longer than 10, cut it off at 10
    if (scores.length > 10) {
      scores.length = 10;
    }
    return scores;
  }

    async restart() {
    if (this.allowPlayer === false) return;
    this.allowPlayer = false;

    // Updates score to be "--"
    this.score = 0;
    const scoreEl = document.querySelector('#score');
    scoreEl.value = "--";

    this.lives = 10;
    this.updatelives();

    this.round = 1;
    this.updateround();

    await this.resetcards();
  }

}

function shufflealgorithm(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

document.addEventListener('DOMContentLoaded', () => {
  game = new Game();
});

document.getElementById('restart').addEventListener('click', () => {
  game.restart();
});



// setInterval(() => { // WebSocket placeholder
// const score = Math.floor(Math.random() * 3000);
// const chatText = document.querySelector('#notification');
// chatText.innerHTML = 
// `<div class="event"><span class="player-event">Someone</span> scored ${score}</div>` + chatText.innerHTML;
// }, 30000);

