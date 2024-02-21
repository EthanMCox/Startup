function loadScores() {
  // Initialize an empty array for storing scores
  let scores = [];

  // Get scores from local storage
  const scoresText = localStorage.getItem('scores');
  if (scoresText) {
    // If scores are found in local storage, parse the JSON string into the scores array
    // parses data of the form [
    //  {"name":"Player 1","score":100,"date":"1/1/2021"},
    //  {"name":"Player 2","score":200,"date":"1/2/2021"}
    // ]
    scores = JSON.parse(scoresText);
  }

  // Get the table body element with ID scores
  const tableBodyEl = document.querySelector("#scores");

  // Check if there are scores to display
  if(scores.length) {
    return;
  } else { // If there are no scores, dispaly a message spanning four columns
    tableBodyEl.innerHTML = "<tr><td colSpan=4>Be the first to score</td></tr>";
  }

}

loadScores();