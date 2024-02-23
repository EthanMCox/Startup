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



class Game {
  allowPlayer;

  constructor() {
    this.allowPlayer = false;

    const playerNameEl = document.querySelector('.player-name');
    playerNameEl.textContent = this.getPlayerName();
  }

  getPlayerName() {
    return localStorage.getItem('userName') ?? 'Mystery Player';
  }


}

const game = new Game();


