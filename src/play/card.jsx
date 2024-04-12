import React from "react";

export function Card(props) {
  //Placeholder

  //End Placeholder

  return (
    <div className="card-center">
      <div className="card" id="card1">
        <div className="card-inner">
          <div className="transparent">
            <img className="card-img-top" src="/card.jpg" alt="playing_card" />
          </div>
          <div className="card-front">
            <img className="card-img-top" src="/card.jpg" alt="playing_card" />
          </div>
          <div className="card-back">
            <div>
              <p className="card-back-text">A</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
