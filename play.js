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

// Later, add a function in the game to generate a new randomly sorted list
let shuffled;

class Card {
  allowFlip;
  el;
  letter;
  cardInner;
  constructor(letter, el) {
    this.el = el;
    this.letter = letter;
    this.allowFlip = true;
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

}

class Game {
  cards;
  allowPlayer;
  cardsflipped;
  score;
  lives;

  constructor() {
    this.allowPlayer = true;
    this.cards = new Map();
    this.cardsflipped = []
    this.score = 0
    this.lives = 10;

    this.createCards();

    const playerNameEl = document.querySelector('.player-name');
    playerNameEl.textContent = this.getPlayerName();
    // console.log(this.cards);
    // this.saveScore(6); // For testing save score functionality
    // this.updatelives(3);
  }

  updatelives() {
    const livesEl = document.querySelector('#lives');
    livesEl.value = this.lives;
  }

  updateScore(score) {
    const scoreEl = document.querySelector('#score');
    scoreEl.value = score;
  }

  getPlayerName() {
    return localStorage.getItem('userName') ?? 'Mystery Player';
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

  async clickcard(card) {
    // Only execute if the player is allowed to flip the card
    if (this.allowPlayer === false || card.allowFlip === false) return;
    this.allowPlayer = false;
    card.allowFlip = false;

    // Flip the card and add to cardsflipped array
    this.cardsflipped.push(card);
    this.flipcard(card);
    await delay(1000);

    // If two cards are flipped, check if they match. Flip them back and set lives to 1 less if they don't match. Otherwise, update the score and set cards to display none
    if (this.cardsflipped.length === 2) { 
      if (this.cardsflipped[0].letter === this.cardsflipped[1].letter) { // Found a match
        this.updateScore(this.score + 1);
        await delay(200);
        this.cardsflipped[0].el.style.display = "none"; // Change to something more elegant later if time
        this.cardsflipped[1].el.style.display = "none";
      }
      else { // No match
        this.lives = this.lives - 1;
        this.updatelives();
        await delay(300);
        this.flipcard(this.cardsflipped[0]);
        this.flipcard(this.cardsflipped[1]);
        await delay(1200);
        this.cardsflipped[0].allowFlip = true;
        this.cardsflipped[1].allowFlip = true;
      }
      this.cardsflipped = [];
    }
    this.allowPlayer = true;
  }

  

  flipcard(card) {
    card.el.querySelector('.card-inner').classList.toggle("flipped");
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

  createCards() {
    this.shuffle();
    document.querySelectorAll('.card').forEach((el, i) => {
      if (i < shuffled.length) {
        this.cards.set(el.id, new Card(shuffled[i].letter, el));
      }
    })
  }

  shuffle() {
    shuffled = backtexts.sort(() => Math.random() - 0.5);
  }

  async resetcards() {
    this.allowPlayer = false;
    this.cards = new Map(); // Clear the cards map. Necessary?
    this.cardsflipped = [];
    this.shuffle();
    this.createCards();
    this.allowPlayer = true;
  }

  async restart() {
    this.allowPlayer = false;
    this.updateScore("--");
    this.resetcards();
    this.allowPlayer = true;
  }

}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

document.addEventListener('DOMContentLoaded', () => {
  game = new Game();
});

// document.getElementById('reset').addEventListener('click', () => {
//   game.reset();
// });



// setInterval(() => { // WebSocket placeholder
// const score = Math.floor(Math.random() * 3000);
// const chatText = document.querySelector('#notification');
// chatText.innerHTML = 
// `<div class="event"><span class="player-event">Someone</span> scored ${score}</div>` + chatText.innerHTML;
// }, 20000);

// const cardElement = document.getElementById('card1'); // For testing letter insertion
// const cardInstance = new Card('B', cardElement);

