# Startup
Startup Application for BYU CS 260

## Specification Deliverable

### Elevator Pitch

Do you ever get bored standing in line, waiting for food at a restaurant, or even just relaxing at home? What if there was a way you could relieve your boredom, stretch your mind, and have fun, all while comparing your scores to friends in real time? Match that lets you re-enact the classic memory game from your childhood, allowing you to test your mental muscles by flipping cards two at a time until you get a match. Each successful match earns you one point. With just three incorrect guesses each round, how far can you get?  

### Design

![Rough Design](RoughDesign.jpg)

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

 # HTML Deliverable:
For this dlieverable I built out the struccture of my application using HTML.

* HTML Pages: Four HTML pages that represent the ability to login, play, view scores, and view info about the game.
* Links: Each of the pages link to each other.
* Text: The about section contains text about the game
* 3rd Party Service Calls: Image on the about section will call an api to get an image.
* Images: There is an image located on the about page. Images of cards are also being used on the play page.
* Login: Name, password box, and login box are all represented on index.html.
* Database: scores page will pull scores from a database.
* Websocket placeholder: Live games and scores posted on the play page. 

# Lecture 2/5/2024 CSS Responsive Design
* \meta name="viewport" content = "width-deivce-width, initial-scale=1"
  * This removes automatic scaling and puts control over scaling into my hands.
 
* Float: One of the oldest responsive elements.
  * float: right;
  * float: inline-end or inline-start: think globally, some languages read from different sides of a page, tells program what side to put the element on, inline. 
    * tells text to render based on language
  * HSL: first element: ? Second element: amount of gray, third element: amount of light.
 
Display:
* block: spans the entirety of the element
* inline: spans only the length of the content.
* grid: ex: card divs nested in container div
  * display: grid;
  * only affects the children. So use display grid for the container class, but not for the card divs themselves.
  * repeat(auto-fill, minmax(100px, 100px)
 
* Flex:
  * display: flex;
  * flex-direction: column; can also use right, row attribute
  * flex applied to all children just like grid.
  * on the flex elements themselves
    * flex: 0 80 px: 0 says don't shrink or grow: 80 px is the basis. it will take 80 px
    * flex: 1: the 1 refers to 1 fractional unit. But it's a fractional unit only of its own flex space.
  * flex-direction: row will make it appear as columns
  * can make flex elements within other flex elements.
  * overflow-y: clip; or scroll. defines what to do if there isn't enough space.
 
* @media (orieentation: protrait)
  * transform: rotate(270 deg):
  * Based on if the orientation is portrait vs landscape, it will render differently.
  * also option to change display: none 
 
Note: some attributes don't inherit
* width won't inherit for example
* color will inherit
