// document.addEventListener('DOMContentLoaded', () => {
//   // Select all elements with the class .card
//   var cards = document.querySelectorAll(".card");

//   // Add a click event lister to each card
//   cards.forEach((card) => {
//     card.addEventListener("click", () => {
//       // Add the class .flipped to the card
//       this.querySelector('.card-inner').classList.toggle("flipped");
//     });

// });

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
  {letter: "E"}
  // {letter: "E"},
  // {letter: "F"},
]

// Later, add a function in the game to generate a new randomly sorted list
let shuffled = backtexts.sort(() => Math.random() - 0.5);

class Card {
  allowFlip;
  constructor(letter, el) {
    this.el = el;
    this.letter = letter;
    this.allowFlip = true;
    this.cardInner = el.querySelector('.card-inner');
    el.addEventListener("click", () => {
      // console.log("Card clicked:", this);
      game.flipcard(this);
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

  constructor() {
    this.allowPlayer = false;
    this.cards = new Map();

    document.querySelectorAll('.card').forEach((el, i) => {
      if (i < shuffled.length) {
        this.cards.set(el.id, new Card(shuffled[i].letter, el));
      }
    
    })

    const playerNameEl = document.querySelector('.player-name');
    playerNameEl.textContent = this.getPlayerName();
    console.log(this.cards);
    // this.saveScore(6); // For testing save score functionality
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

  async reset() {
    this.allowPlayer = false;
    this.updateScore("--");
    this.allowPlayer = true;
  }



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

