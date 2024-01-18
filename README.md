# Startup
Startup Application for BYU CS 260

## Specification Deliverable

### Elevator Pitch

Do you ever get bored standing in line, waiting for food at a restaurant, or even just relaxing at home? What if there was a way you could relieve your boredom, stretch your mind, and have fun, all while comparing your scores to friends in real time? Match that lets you re-enact the classic memory game from your childhood, allowing you to test your mental muscles by flipping cards two at a time until you get a match. Each successful match earns you one point. With just three incorrect guesses each round, how far can you get?  

### Design

Placeholder image

### Key Features

- Secure login over HTTPS
- Ability to flip cards two at a time to look for a match
- Counter to keep track of round, lives, and score
- Scores from other players displayed in real time.
- High scores persistently stored


### Technologies:

I am going to use the required technologies in the following ways.

- **HTML** - Uses correct HTML structure for application. Four HTML pages. One each for login, playing the game, viewing high scores, and viewing information about the game. 
- **CSS** - Styling scales to different screen sizes and uses clean color choice and contrast.
- **JavaScript** - Provides login, game start button, and card flipping.
- **Service** - Functionality to save high scores
- **DB/Login** - Securely storing user data for login information and high scores in a database. Unable to play or view high scores unless authenticated. 
- **WebSocket** - As other players play the game and get a score, those scores are displayed to other players in the game.
- **React** - Application ported to use the React framework. 

 
