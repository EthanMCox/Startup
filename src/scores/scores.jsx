import React from "react";

import "./scores.css";

export function Scores() {
  const [scores, setScores] = React.useState([]);

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
        <tbody id="scores">Hello</tbody>
      </table>
    </main>
  );
}
