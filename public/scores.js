async function loadScores() {
  // Initialize an empty array for storing scores
  let scores = [];
  try { // Try to fetch scores from the API
    const response = await fetch('/api/scores');

    scores = await response.json(); // Something is wrong with this functionality
    console.log("awaited response");

    // Save scores in local storage in case server endpoints fail later
    localStorage.setItem('scores', JSON.stringify(scores));
    console.log("Successfully loaded API")
  } catch { // Get scores from local storage if the API fails
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
    // If scores are found in local storage, parse the JSON string into the scores array
    // parses data of the form [
    //  {"name":"Player 1","score":100,"date":"1/1/2021"},
    //  {"name":"Player 2","score":200,"date":"1/2/2021"}
    // ]
    scores = JSON.parse(scoresText);
    console.log("Failed, loaded local storage instead")
    }
  }


  // Get the table body element with ID scores
  const tableBodyEl = document.querySelector("#scores");

  // Check if there are scores to display
  if(scores.length) {
    // If there are scores, loop through each score and create a table row for each
    for (const [i, score] of scores.entries()) {
      // Create table cells for ran, name, score, and date
      const rankTdEl = document.createElement('td');
      const nameTdEl = document.createElement('td');
      const scoreTdEl = document.createElement('td');
      const dateTdEl = document.createElement('td');

      // Set the content of each table ceel with the corresponding score data
      rankTdEl.textContent = i + 1; // Rank is index + 1
      nameTdEl.textContent = score.name;
      scoreTdEl.textContent = score.score;
      dateTdEl.textContent = score.date;

      // Create a table row and append the table cells to it
      const rowEl = document.createElement('tr');
      rowEl.appendChild(rankTdEl);
      rowEl.appendChild(nameTdEl);
      rowEl.appendChild(scoreTdEl);
      rowEl.appendChild(dateTdEl);

      // Append the row to the table body
      tableBodyEl.appendChild(rowEl);
    }
  } else { // If there are no scores, dispaly a message spanning four columns
    tableBodyEl.innerHTML = "<tr><td colSpan=4>Be the first to score</td></tr>";
  }

}

loadScores();