express = require('express');

const app = express();

// Use the port provided as the first command-line argument, or 3000 if not provided
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Create a router for the API Service Endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// GetScores endpoint
apiRouter.get('/scores', (_req, res) => {
    res.send(scores);
});

// Submit score endpoint
apiRouter.post('/score', (req, res) => {
    const newScore = req.body;
    scores = updateScores(newScore, scores);
    res.send(scores);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});


// Start the server, log where the server is running
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

let scores = [];
function updateScores(newScore, scores) {
    let found = false;
    for (const [i, prevScore] of scores.entries()) {
        if (newScore.score > prevScore.score) {
            scores.splice(i, 0, newScore);
            found = true;
            break;
        }
    }

    // Insert score at the bottom of the list if not already found
    if (!found) {
        scores.push(newScore);
    }

    if (scores.length > 10) {
        scores.length = 10;
    }

    return scores;
}