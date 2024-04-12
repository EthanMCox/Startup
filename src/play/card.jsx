import React from "react";

export function Card(props) {
  return (
    <div class="card-center">
      <div class="card" id="card1">
        <div class="card-inner">
          <div class="transparent">
            <img class="card-img-top" src="card.jpg" alt="playing_card" />
          </div>
          <div class="card-front">
            <img class="card-img-top" src="card.jpg" alt="playing_card" />
          </div>
          <div class="card-back">
            <div>
              <p class="card-back-text">A</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
