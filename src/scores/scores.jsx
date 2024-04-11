import React from "react";

import "./scores.css";

export function Scores() {
  const [scores, setScores] = React.useState([]);

  React.useEffect(() => { // On first loading of component, get the scores
    fetch('api/scores')
        .then((response) => response.json())
        .then((scores) => {
            setScores(scores);
            localStorage.setItem('scores', JSON.stringify(scores));
        });
  }, []);

  const scoreRows = [];
  if (scores.length) {
    for (const [i, score] of scores.entries()) {
      scoreRows.push(
        <tr key={i}>
          <td>{i+1}</td>
          <td>{score.name.split('@')[0]}</td>
          <td>{score.score}</td>
          <td>{score.date}</td>
        </tr>
      );
    }
  } else {
        scoreRows.push(
        <tr>
            <td colSpan="4">Be the first to score</td>
        </tr>
        );
    }

  return (
    <main class="container-fluid bg-secondary text-center">
      <table class="table table-striped">
        <thead class="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody id="scores">{scoreRows}</tbody>
      </table>
    </main>
  );
}
