const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');

const authCookieName = 'token';

// Use the port provided as the first command-line argument, or 3000 if not provided
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Trust headers that are forwarded from the proxy so we can determine IP addresses
app.set('trust proxy', true);

// Create a router for the API Service Endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth token endpoint (for new users)
apiRouter.post('/auth/create', async (req, res) => {
    // request object contains email that is accessed by req.body.email
    if (await DB.getUser(req.body.email)) { 
        res.status(409).send({ msg: "Existing user" });
    } else {
        const user = await DB.createUser(req.body.email, req.body.password);

        // Set the cookie
        setAuthCookie(res, user.token);

        res.send({
            id: user._id,
        });
    }
});

// Get Auth token for the provided credentials
apiRouter.post('/auth/login', async (req, res) => {
    const user = await DB.getUser(req.body.email);
    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
            setAuthCookie(res, user.token);
            res.send({ id: user._id});
            return;
        }
    }
    res.status(401).send({ msg: "Invalid email or password" });
});

// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', (_req, res) => {
    res.clearCookie(authCookieName);
    res.status(204).end();
})

// GetUser returns information about a user
apiRouter.get('user/:email', async (req, res) => {
    const user = await DB.getUser(req.params.email);
    if (user) {
        const token = req?.cookies.token;
        res.send({ email: user.email, authenticated: token === user.token});
        return;
    } 
    res.status(404).send({ msg: "User not found" });
});


var secureAPIRouter = express.Router();
apiRouter.use(secureAPIRouter);

secureAPIRouter.use(async (req, res, next) => {
    authToken = req.cookies[authCookieName];
    const user = await DB.getUserByToken(authToken);
    if (user) {
        next();
    } else {
        res.status(401).send({ msg: "Unauthorized" });
    }
})

// GetScores endpoint
secureAPIRouter.get('/scores', async (req, res) => {
    const scores = await DB.getHighScores();
    res.send(scores);
});

// Submit score endpoint
secureAPIRouter.post('/score', async (req, res) => {
    const score = { ...req.body, ip: req.ip };
    await DB.addScore(score);
    constscores = await DB.getHighScores();
    res.send(scores);
});

// Default error handler if server endpoints do not work correctly
app.use(function (err, req, res, next) {
    res.status(500).send({ type: err.name, message: err.nessage });
})

// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

// Set the authentication cookie
function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
    })
}

// Start the server, log where the server is running
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
