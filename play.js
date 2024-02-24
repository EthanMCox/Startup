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

const backtexts = [
  {text: "A"},
  {text: "B"},
  {text: "C"},
  {text: "D"},
  {text: "E"},
  {text: "F"},
  {text: "G"},
  {text: "H"},
  {text: "A"},
  {text: "B"},
  {text: "C"},
  {text: "D"},
  {text: "E"},
  {text: "F"},
  {text: "G"},
  {text: "H"}
]

let shuffled = backtexts.sort(() => Math.random() - 0.5);

class Card {
  constructor() {
    this.card = card;
    this.cardInner = card.querySelector('.card-inner');
    card.addEventListener("click", () => {
      this.cardInner.classList.toggle("flipped");
    });
  }

}

class Game {
  allowPlayer;

  constructor() {
    this.allowPlayer = false;

    const playerNameEl = document.querySelector('.player-name');
    playerNameEl.textContent = this.getPlayerName();
    this.saveScore(5);
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

const game = new Game();
console.log(shuffled);



// setInterval(() => { // WebSocket placeholder
// const score = Math.floor(Math.random() * 3000);
// const chatText = document.querySelector('#notification');
// chatText.innerHTML = 
// `<div class="event"><span class="player-event">Someone</span> scored ${score}</div>` + chatText.innerHTML;
// }, 20000);

