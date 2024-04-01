# How To Write Markdown: Notes

* Course website: learn.cs260.click

## Headings:
* \# = first-level-heading
* \## = second-level heading
* \### = third-level heading
## Styling
* ** or __ __ = bold
* \* \* or _ _= italic
* ~~ ~~ = strikethrough
* ** ** and _ _ = bold and nested italic
* *** *** = all bold and italic
* \<sup> and \</sup> - superscript
## Quoting text:
* Use > to begin text that is a quote
* Use ``(backticks) to call out code within a sentence. This will not be formatted. 
* Use triple backticks to format code or text into it's own distinct block. 
* Backticks can be used before hexadecimal colors to indicate the color. 
## Links:
* Create inline link by wrapping link text in brackets and wrapping the URL in parentheses. Or just use command k
* This site was built using \[GitHub Pages](https://pages.github.com/).
Images: 
* ! denotes that you are displaying an image, then wrap alt text in [] and link in ()
## Nested lists:
* Have first line item, then put either \- or \* to begin the nested list on the next line, directly below the first letter on the top line 
* To create a task list, preface list items with a hyphen and space followed by \[ ]
To mark a task as complete, use \[x]

Add footnotes to text using bracket syntax:
* Here is a simple footnote\[^1].
\[^1]: My reference. 
* To add line breaks within a footnote, prefix new lines with two spaces. 
* Hide comments with HTML comments: \<!--     \-->
Escape markdown formatting using \\


# Lecture 1/17/24: History

* Tim Burners-Lee = Father of the Internet
  * HTTP, HTML, URL
* Hakon Wium Lie
  * CSS
  * Gave control to the browswer for determining what things like bold looks lie
  * Super powerful
* Brendan Eich
  * JavaScript
  * "Always bet on JS"
  * Most common language in the world, runs on just about everything
  * All about interactivity
Using a web framework automatically does some functionality like making sure

# EC2 Notes

* My web server: http://34.202.72.116/
* ssh commands
  * ssh -i [key pair file] ubuntu@34.202.72.116
  * chmod 600 [key pair file]
  * ls -l once in to see what is in there. 
  * Once done on the server, exit by running the exit command
 
# 1/22/2024: Caddy, HTTPS, TLS, and Certificates
* Caddy: manages security certificates
* Ability to route requests is called a gateway or reverse proxy: allows you to expose multiple web services as a single external web service
* Caddy handles the creation and rotation of web certificates, allowing easy support of HTTPS
* Caddy serves up all static HTML, CSS, and JavaScript files. All early application work will be hosted as static files
* Caddy acts as a gateway for subdomain requests to your Simon and startup application services. For example, when a request is made to simon.yourdomain, Caddy will proxy the request to the Simon application running with node.js as an internal web service.
* Curl: A command line browser

# 1/24/2024 Lecture: The Console
* Common commands
  * ls: list of files and directories in present working directory
  * ls -l: list one file or directory on each line, more information shown
  * echo: output the parameters of the command
  * curl: command line client URL browser
  * cd: change directory
  * grep: regular expression search
  * mkdir: make a new directory
  * rmdir: remove directory
  * rm: remove file(s)
  * find: find files
  * Top: view running processes with CPU and memory usage
  * df: view disk statistics
  * cat: output the contents of a file
  * less: interactively output the contents of a file
  * wc: count the words in a file
  * ps: view the currently running processes (similar to top)
  * kill: kill a currently running process
  * sudo: execute a command as a super user (admin)
  * ssh: create a secure shell on a remote computer
  * scp: securely copy files to a remote computer
  * history: show the history of commands
  * ping: check if a website is up
  * tracert: trace the connections to a website
  * dig: show the DNS information for a domain
  * man: look up a command in the manual
Chaining commands
  * |: take the output from the command on the left and pipe, or pass it, to the command on the right
  * >: redirect output to a file and overwrite the file if it exists
    >>: redirect output to a file. Appends if the file exists
Control keys:
* Ctrl c: cancel command
* ctrl r: recall command
* Types of operating systems
  * Linux: the web runs on linux
  * Mac
  * Windows
  * WSL: essentially emulating linux
  * Whatever one I choose, I need to own it. Make sure I really understand the tools available to me.
  * **Important**: When doing anything in this class, use git bash or ubuntu
  * Mac Terminal: Warp is really good
For this class:
* Install live server(VSCode)
* Install GitLens (VSCode)
The more I play with VSCode, the more I will understand the power of the tools

Vi = vim. Use vi
* Use i for insert mode (vi will tell me I'm in insert mode)
* escape to get out of insert mode, back in command mode
* To save: :wq. This writes (saves) and then quits the program
* :w will write

# Lecture 1/26/24: HTML
* Index.html: This is what you load by default if you don't say what resource you want
  * **Make sure to use this for the default html I want to load for my page**
* All HTML elements work like a tree
  * html -> head -> title -> First HTML (appears in tab)
  * html -> body -> Hello World
HTML components:
* \<!DOCTYPE html>: optional, but tells you what version of html you are using
  * This is the declaration for html 5 specifically
* <html lang="en"> tells html to run in english—lang is an attribute
* html is borken into start tag and end tag
  * \<head> and \</head>
* Document object model: in memory version of html
* \<p> tag
* \<img> tag
* \<h1> through \<h9>: how this is represented is nonstandard: this should be done with html
* div: a block division of content
* span: an inline span of content within a block
* header: put nav elements here with menu, etc.
* Footer
* table: lots of associated tags
* ol, ul: ordered and unordered lists
* a: anchor tag
* img: graphical image reference
* h1-9
* Reserved characters: &, <, >, ", ;, smiley face; entity tags
  * 

html 5 will autofill html in my code

* Link references:
  * Absolute : \<a href = "https://cs260.click/profile.png" /a>
  * Relative: href = "profile.png", href = "../images/profile.png": "These are generally better to use because it gives you more flexibility in moving stuff around
 
Codepen: make sure to fork so I can save my personal version. 

# Codepen Notes
* Can make a free account
* Allows you to experiment with HTML, CSS, JavaScript, and React; these experiments are saved in a "pen." Every pen has a unique URL.
* CodePen immediately renders your code in the preview window, so you can reduce a problem to something small, quickly iterate ideas, and immediately see the impact.
* Serves as a portfolio of what you have learned.
* When working with assignments involving CodePen to submit work, do the following:
  1. Either create a new pen, or fork an existing example pen.
  2. Conduct the experiment as defined by the assignment
  3. Save assignment periodically so I don't lose any work. Consider using pen collections for different technologies.
  4. Submit the pen's URL in Canvas along with a description of some interesting thing that I learned.
* Codepen is also useful to find coding examples, not just to complete assignments. 

# HTML Notes:
* HTML elements are enclosed in tags
* head element includes metadata about a page and page title.
* Body element represents main content and structure, as opposed to things like headers, footers, asides, and navigation content
* Attributes: every HTML element may have attributes. For example, id attribute can give a unique ID to an element to distinguish it. Class attribute is another common attribute that designates the element as being classified into a named group of elements.
* Attributes are written inside an element tag with a name followed by an optional value.  Use sigle quotes or double quotes to delimit attribute values.
* Hyperlinks: one of the core features that made the web so successful. Represented with anchor element and hyplerlink (href) reference.
* Common elements:
  * html: page container
  * head: header information
  * title: Title of the page
  * meta: metadata for the page such as character set or viewport settings
  * script: JavaScript reference. Either an external reference, or inline
  * include: external content reference
  * body: entire content body of the page
  * header: header of the main content
  * footer: footer of the main content
  * nav: Navigational inputs
  * main: main content of the page
  * section: a section of the main content
  * aside: aside content from the main content
  * div: a block division of content
  * span: an inline span of content
  * h1-h9: text heading
  * p: a paragraph of text
  * b: bring attendion
  * table: table
  * tr: table row:
  * th: table header
  * td: table data
  * ol,ul, ordered or unordered list
  * li: list item
  * a: anchor the text to a hyperlink
  * img: graphical image reference
  * dialog: interactive component such as a confirmation
  * form: a collection of user input
  * input: user input field
  * audio: audio content
  * video: video content
  * svg: scalable vector graphic content
  * iframe: inline frame of another HTML page
  * comments: \<!-- comment text -->
 
* Special characters:
  * &: &amp;
  *  <: &lt;
  *  >: &gt
  * ": &quot;
  * ': &apos;

* html versions introduced different things:
  * html1: format tags
  * html2: tables, internationalization
  * html3: mathML, CSS, frame tags
  * html4: external CSS
  * html5: email, password, media, semantic tags
 
  * by default, a web server will display the HTML file named index.html when a broswer makes a request without asking for a specific html file. Thus, main html is commonly named index.html
 
  * Rendering html: use live server extention or codepen

# HTML Structure Elements:
* Two major purposes of HTML is to provide structure and content to web application
* Common structural elements: body, header, footer, main, section, aside, p, table, ol/ul, div, and span.
* Header contains a paragraph with a span and a navigation containing multiple divisions of sub-content.
* Main can contain multiple sections.
* Proper structure is important so that it makes logical sense to a programmer and so that automated tools like search indexing crawlwers and accessibility screen readers can correctly interpret the document.
* block vs. inline structure: block is a distinct block in the flow of content structure, while an inline element is meant to be inline with the content flow of a block element. So inline flows do not disrupt the flow of a block element's content.

# HTML Input Elements:

* Input elements accept input of user data
Input elements:
* form: input container and submission
  * Main purpose is to submit values of the inputs it contains. JavaScript has more sophisticated methods and control though
  *  Not as useful now because of JavaScript, but is often still used simply as a container
  *  Not required to use this to use input elements. 
* fieldset: labeled input grouping
* input: multiple types of user input
  * many different input types, which you can choose from.
  * types include different flavors of textual, numeric, date, and color inputs
    * text: single line textual value
    * password: obscured password
    * email: email address
    * tel: telephone number
    * url: URL address
    * number: numerical value
    * checkbox: inclusive selection
    * radio: exclusive selection
    * range: range limited number
    * date: year, month, day
    * datetime-local: date and time
    * month: year, month
    * week: week of year
    * color: color
    * file: local file
    * submit: button to trigger form submission
  * most input elements share common attributes
    * name: submitted as the name of the input if used in a form
    * disabled: disables the ability for the user to interact with the input
    * value: initial value of the input
    * required: signifies that a value is required in order to be valid   
* select: selection dropdown
* optgroup: grouped selection dropdown
* option: selection option
* textarea:multi-liine text input
* label: individual input label
* output: output of input
* meter: display value with a known range

* Validating input: several elements have validation built in and won't accept a value that is not a number, URL, outside of range, etc. You can also specify the required attribute on an input element before it can be submitted. 
* Pattern attribute exists on text, search, url, tel, email, and password inputs and when present, provides a regular expression that must match for the input to be considered as valid. JavaScript should also use validation before submission. It is critical to provide sufficient user feedback early in the input process.  A good design will provide feedback as, or before, the user begins to input.

# HTML Media:
* HTML elements that represent media include img, audio, video, svg, and canvas. img, audio, and video elements are all simple references to an external file, but svg and canvas both contain the code to render a visual image that can even be animated.
* Media tags that reference external media all take a URL as an attribute. The path represented by the URL can be either relative or full.
  * A relative path references a file that is served from the same location as the HTML page rendering the element. You want to make the path as relativea s possible so you can move your code around without having to actually adjust all of the external page references. You want to make a patha s relative as possible so that you can move your code around without having to actually adjust all of the external page references.
  * Img element: specify src attribute with URL to source image, and for full accessibility also include an alt attribute describing the image.
  * Audio: use audio element and specify src attribute with URL to source audio file. Can also include controls attribute if you want user to be able to control audio playback.
    * Autoplay attribute starts the audio playing as soon as the audio file is loaded, and the loop attribute keeps it playing over and over. Auto-playing audio is discouraged unless there is a way for user to opt-in to that behavior.
   
  * Video: use video element. Also has controls and autoplay attributes
    * May need to include the crossorigin="anonymous" attribute if requesting files from a different domain than the one serving your content.
  * Svg: powerful and widely supported way to rener graphics inline in HTML.
  * Canvas: introduced to facilitate 2d drawing and animation. HTML for canvas element is simple, but actually drawing on it requires JavaScript support. 


# Lecture 1/29/2024: HTML Continued
* Possible to get around having to rewrite the same html code every time
* With react, I'll only have one page, and dynamically rewrite everything with JavaScript.
* Get the header and footer right the first time and then just rewrite the code
* &reg is an entity tag used for Simon
* method get: and action: play.html: allows me to go to play.html when I login
* Scores.html will have a table of scores
* Need to use a shall script to deploy stuff

# Lecture 1/31/2024: CSS
* HTML doesn't care about spaces.
* &nbsp can be used in html to actually have spaces. Or just use CSS, which is much better
* Way to add style: add attributes
  *style="color:red;margin-left: 3in"
  Use <style> html element and put it in head. Use selector like \<p>
* CSS is all about developing rulesets, or rules.
* Cascading in cascading style sheets refers to how you can inherit styles from above and still have style in nested elements. Like body can have a style and p(paragraph) can have style
* More specific = overriding anything that it inherits. More local is more specific.
* Use \<link rel="stylesheet" href="styles.css" /> and put that in head
* when specificity is equal, whatever is declared last takes precedence.
* Some attributes:
  * font-family: font type
  * font-size: 3em = width of 3 ems
  * font-weight: bold:
  * text-align: center;
  * padding: 1em: padding puts space around it
  * transform: rotate(-45deg): rotate
* Selectors: applying style to a particular kind of tag
  * Id and class selectors
  * Id: the element with the given id: use #name
  * class: all elements with the given tag: use .name
  * element class: any elements with the specific name and class
  * id takes precedence over
* You can use .hover functionality, apply features when you hover over it
* display: block, contents, flex, flexbox, lots of other options. Ie. display, inline, none makes everything disappear
* border: yellow solid thin: this is a composite type, there are three separate border-attributes that describe this.
* border-radius
* know avaiable properties: there are probably around 100-150 out there.
* Units:
  * px
  * pt
  * %
  * Add more to this
* Be familiar with box outline. 
* Content, padding, border, margin in that order going out: (pals before marriage)
*  background: linear-gradient(to bottom, green) adds a gradient on background.

# Startup HTML Important Notes:
* Deployment steps: ./deployFiles.sh -k <yourpemkey> -h <yourdomain> -s startup
  * ./deployFiles.sh -k ~/keys/production.pem -h yourdomain.click -s startup

# Cascading Style Sheets Reading
* Three ways to associate CSS with HTML:
  * Use HTML style attribute of an HTML elelment and explicitly assign one or more declarations
  * Use style element to define CSS rules within the HTML document, appears in the head element so that all rules apply
  * Use link element to reference an external file containing CSS rules: this is generally preferred.
* any rule defined earlier in a tree will be overwritten by a more specific rule
* Box model: CSS defines everything as boxes. When you apply styles, you apply them to a region of the display that is a rectangular box.
* Box model: content, padding, border, and margin\
  * Padding inherits thing like background color
  * Border has properties like color, thickness, and line style
  * margin is considered external to actual styling of the box and therefore only represents whitespace.
  * By default, width and height of an element is defined by width and height of the contet box. You can change the box-sizing property from content-box to border-box to redefine width and height to also include padding and the border. This can make it much easier to style elements because visual size matches their actual size.
 
CSS rule selector:
* element type selector: *, body, etc.

Combinators:
* Essentially using two selectors at once.
  * section h2: chacing color of second level headings but only second level headings.
  * Descendant: list of descendants: body section (doesn't have to be direct child of the body)
  * Child: a list of direct children: section > p: applies to any p that is a direct child of a section
  * General sibling: p ~ div: applies to any p that has a div sibling
  * Adjacent sibling: p + div: any p that has an adjacent div sibling.
 
Class selectors:
* Any element can have zero or more calssifications applied to it.
* use .attribute or p.attribute if you want to only apply attributes that are of type p: latter would be combining element and class selectors

ID selectors: similar to class selectors:
* Use #idname

Attribute selectors:
* select elements based upon their attributes.
* Select any element with a given attribute and applies particular characteristics to it. 
* e.g. p[class='summary'] { color: red; } will apply the color red to any paragraph tag of class summary

Pseudo selector:
* selectors based on positional relationships, mouse interactions, hyperlink visitation states, and attributes
* Example: purple highlight bar appears only when mouse hovers over the text. Then:
  * section-hover { border-left: solid 1em purple; }
 
Declarations:
* specify a property and a value to assign when the rule selector matches one or more elements:
  * background-color: color
  * border: color width style
  * border-radius: unit
  * box-shadow: x-offset y-offset blu-radius color: creates a shadow
  * Columns: number
  * column-rule: color width style: sets border used between columns using border shorthand
  * color: color: rgb(128, 0, 0)
  * cursor: type: grab: sets cursor to display when hovering over the element
  * display: type: non: defines how to display the element and its children
  * filter: filter-function: applies a visual filter
  * float: direction: right: places element to the left or right in the flow
  * flex: flex layout used for responsive design
  * font: family size style
  * grid: grid layout used for responsive design
  * height: unit: sets height of the box
  * maring: unit: sets margin spacing
  * max-[width/height]: restricts width or height to no more than the unit
  * min-[width/height]: unit: restricts the width or hieght to no less than the unit
  * opacity: number: sets how opaque the elment is
  * overflow scroll: defines what happens when the content does not fit in the box: [visible/hidden/scroll/auto]
  * position: [static/relatrive/absolute/sticky]: dfines how the element is positioned in the document
  * padding
  * left: horizontal value of a positioned element: 10rem ex.
  * text-align: [start/end/center/justify]: defines how text is aligned
  * top: unit: vertical value of a positioned element
  * transform: applies a transformation to the element
  * width: sets width of the box
  * z-indez: controls positioning of element on the z-axis.
 
Common units:
* px: num of pixels
* pt: number of points (1/72 of an inch)
* in
* cm
* %: percent of parent element
* em
* rem: multiplier of the width of the letter m in the root's font
* ex: multiplier of the height of the element's font
* vw: percentage of viewport's width
* vh: percentage of the viewport's height
* vmin: percentage of the viewport's smaller dimension
* vmax: percentage of the viewport's larger deminesion

Multiple ways of describing color: keyword, RGB hex, RGB function, HSL
  
# Lecture 2/2/2024: More CSS: Fonts/animation
* Use fonts: google fonts is super cool
* font-family property defines what fonts should be used. First font in the list that is available will be used. Ability to select from a list is important because different operating systems have different default fonts and first choice may not be available.
* four major font families: Serif, sans-serif, fixed, and symbol.
  * Sefif fonts have small strokes attached to the ends of character's major strokes. Sans serif fonts don't have this.
  * Fixed fonts have characters of all the same size. Useful when doing things like coding or displaying tabular data.
  * Import fonts.
  * meta charset="UTF-8" specifies what kind of characters are allowed. 
* unicode and UTF-8

Animations:
* animation-name property
  * animation-name: demo;
  * animation-duration: 3s;
  * animation: 0.01s infinite alternate: alternates infinitely at intervals of 0.01s
  * Use @keyframes to define animation
  * @keyframes demo { from { font-size: 0vh;}
  * 95% { font-size: 21vh;}
  * to {font-size:20vh
 
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
 
* @media (orientation: protrait)
  * transform: rotate(270 deg):
  * Based on if the orientation is portrait vs landscape, it will render differently.
  * also option to change display: none 
 
Note: some attributes don't inherit
* width won't inherit for example
* color will inherit

# CSS Animation Notes
* Within the element: animation-name: name
* animation-duration: 3s;
* Then create @keyframes name

# CSS Responsive Design
* display attribute:
  * None: don't display the element
  * block: display the elment with a width that fills its parent alement. A p or div element has block dispaly by default
  * inline: dispaly this element with a width that is only as big as its content. A b or span element has inline display by default
  * flex: display this element children in a flexible orientation
  * grid: display this element's children in a grid orientation.
* viewport meta tag: tells browser not to scale the page.
* float: float css property moves an element to the left or right of its container elemeent and allows inline elements to wrap around it.  
* media queries:
  * Use @media selector to tell which side of the screen is the longest. A media query takes one or more predicates separated by boolean operators.
 
# CSS Grid:
* display option
* grid-template-columns: repeat(auto-fill, minmax (300px, 1fr))
* grid-auto-rows: 300px;
* grid-gap: 13m;

# CSS Flexbox:
* header: flex: 0 80px: 0 means it will not grow and 80px means it has a starting basis height of 80 pixels, creating a fixed size box
* footer: flex: 0 30px
* main: flex: 1: one means it will get one fractional unit of growth, and since it is the only child with a non-zero growth value it will get all the remaining space. Main also gets some additional properties because we want it to also be a flexbox container for the controls and content area. So we set its display to be flex and specify flex-direction to be row so that the children are oriented side by side.
* Media query: handle small screen sizes. to do this, add media queries to drop header and footer if the viewport gets too short, and orient the main sections as rows if it gets too narrow. Detect when in portrait orientation.
* trigger media query when viewport height has max value of 700 pixels, then change display so that header and footer are obth none.

# Lecture 2/7/2024:
* \* selector selects everything
* root selector: root element of all parent elements.
* Use MDN as a reference for how things work in CSS
* CSS framework just means that it's a selection of prebuilt code

Bootstrap:
* Common CSS framework
* How to use it: link bootstrap
* class="btn btn-primary"
* Put javascript elements towards the bottom or use defer on \<script> elements.

# Bootstrap Notes:
* Just insert the bootstrap link and I have all the bootstrap classes/functionality out of the box. 
* CSS h1,h2, etc. classes that override html
* display-1, display-2, etc. classes that are cleaner headings
* lead class: slightly bigger text to lead off a paragraph and make it more noticable.
* text-decoration-underline, text-decoration-line-through, etc.
* There are default theme colors in bootstrap that I can use
* use text-primary, text-secondary, info, warning, success, danger, muted to change text color
* Use bg-primary, bg-secondary, etc. for background colors
* button components: lots of options, check out bootstrap: always use btn class, can also use btn-primary/secondary, etc. to change the button color, btn-lg, btn-sm respectively for large and small buttons, etc. btn-outline-primary, secondary, etc.
* btn-group class within a div, groups button so there is no space between them, then can change each one's colors, background, etc.
* containers: different kinds, container-fluid is most useful. Different containers essentially just control dynamic resizing. fluid is the most dynamic.
* img-fluid class as well
* Accordion: Use div class="accordiion with nested divs with accordion-items

# Lecture 2/9/2024 JavaScript intro
* Brandon Eich invented JavaScript
* JavaScript: Inspired by Scheme, interpreted language, dynamically typed, so it will help you get to the right type you want.
* JavaScript has nothing to do with Java
* Interpreted at runtime
* Lots of just on time code
* JavaScript is the most popular language in the world.
* console in inspect element is a javascript interpreter
* Node.js allows you to run javaScript directly from terminal
* console class, log operation. logs it out to the debug output
* main.js file
* Three ways to include JavaScript in html
  * Script attribute
  * \<script>
  * Put it in head
* defer on script will make sure it loads after everything else
* Declare a function with function
* Debugger function in javascript functions like a break point.
* var x = 1; dynamic typing (don't use this)
* Instead use let y = 1;
* const z = 'tacos'; makes z a constant.
* functions are first order objects like ints and booleans in javascript
* Types:
  * Null = empty value. This is type object, value null
  * undefined = primitive value. This is an undefined class, value undefined.
  * string type
  * number type
  * object type (also primitive type in javascript): dictionaries/maps are objects in js
  * array is type object
  * instance of operator
  * function type; function f(x) has type function and value f
  * NaN primitive type in js
* json = javascript object notation 

# Lecture 2/12/2024 More JavaScript
* Truthy/false value in JavaScript
  * Falsy: false, 0, -0, '', NaN, null, undefined
  * while statements in javascript
  * switch case statements
  * Higher order function
  * arrow functions (very similar to lambda functions)
    * const arrow = () => 1;
    * const arrowWithBlock = (a) => { a; }; (when done this way, you need to specify what you are returning)
  * dup() function (kind of like higher order function
 
# Lecture 2/14/2024 More JavaScript
* let s = "Cats Dogs Rats Mice';
  * is equivalent to:
  * s = new String('Cats Dogs Rats Mice');
* console.log('casefold ', .toUpperCase(), s.toLowerCase());
* split function
* endsWith function
* replace function
* slice function:
  * console.log('slice: ', s.slice(3,7));
* regex functionality
  * const objRegex = new ReExp('cat.?', 'i')
  * const literalRegex = /cat.?/i;
  * the i is a flag that tells how to parse it.
* use regex for my username/password in my website
* regex replacement
* Arrays: let numbers = []
  * Use push to push a value into the array
  * Mapping to arrays: numbers.map((n) => n * 100) will take every value in the array and multiply it by 100.
  * Reduce function: numbers.reduce((a, c) => a + c). a is the accumulator (current accumulated value) and c is the current value (the next to be accumulated).
  * ForEach function: numbers.forEach((n) => console.log(n % 2))
  * numbers.filter((n) => n % 2)) Filters out anything that is even.
  * numbers.some((n) => n > 5)) returns a boolean true or false if there is something that meets the condition.
 
* try catch finally block. Can have just try and finally.

* Template literals:
  * like an f string in python
  * console.log(`Template ${'lite' + 'rals'}! ${hello(name)}`;
  * returns "Template literals! hola amigo"
 
* Truthy vs falsy vs. nullish
  * null and undefined are nullish
  * ?? checks for non null values. similar to how || will return the first thing that is truthy and not falsy.
  * short circuit with nullish coalescing
  * let z;
  * z ?? (z = x);
  * y ??= 30;

# JavaScript Notes:
* With CodePen you can write whatever JavaScript you would like and immediately see the results.
## JavaScript Console:
*  Provides interaction with JavaScript runtime's debugger console. This is different that operating systems console (terminal/command line).
* log: basic usage of the console object is to output a log message.
* console.log('hello');
* create formatted messages in the log output
  * console.log('hello %s', 'world');
* can also specify CSS declarations to style the log output
  * console.log('%c JavaScript Demo', 'font-size:1.5em; color:green;');
* Timers: If you want to see how long a piece of code is running you can wrap it with time and timeEnd calls and it will output the duration between the time and timeEnd calls.
  * console.time('demo time');
  * ...code
  * console.timeEnd('demo time');
* To see how many times a block of code is called you can use the count function
  * console.count('a');
  * console.count('a'); then this will return 2. substitute a for a given function, element, etc. 
  * console.count'b');

## Adding JavaScript to HTML:
* you can insert HTML either by directly including it in the HTML within the content of a \<script> element, or by using the src attribute of the script element to reference an external JavaScript file.
* function sayHello() {console.log('hello');}
* \<script> src="javascript.js"> /</script> /</head>

## JavaScript type and construct
* let x = 1
* const y = 2
* Several primitive types:
  * Null: has not been assigned a value
  * Undefined: type of variable that has not been defined
  * Boolean: true/false
  * Number: 64 bit signed number
  * BigInt: a number of arbitrary magnitude
  * String: a textual sequence of characters
  * Symbol: A unique value
 
* In addtion to primitive types, there are a few object types
  * Object
  * Function
  * Date
  * Array
  * Map
  * JSON
 
* JavaScript is weakly typed.

# String functions
* The string objects has several interesting functions associated with it.
  * length: number of charactres in the sstring
  * indexOf(): The starting index of a given substring
  * split(): Split the string into an array on the given delimiter string
  * startsWith(): True if the string has a given prefix
  * endsWith() true if the string has a given suffix
  * toLowerCase() converts all characters to lowercase.
 
## Functions:
* javaScript functions are first class objects, meaning they can be assigned to a name, passed as a parameter, returned as a result, and referenced from an object or array just like any other variable.
* No type declarations

Functon parameters:
* When a function is called, the caller may choose what parameters to provide. If a parameter is not provided then the value of the parameters is undefined when the function executes.

Anonymous functions:
* Functions in JavaScript are commonly assigned to a variable so that they can be passed as a parameter to some other function or stored as an object property. To support this you can define a function anonymously and assign it to a variable.
* An anonymous function is one assigned to a variable.

Creating, passing, and returning functions:
* can also use functions as parameters and return values.
* functions can be declared insie other functions, allowing you to modularize your code without always exposing private details.

## JavaScript arrow function:
* because functions are first order objects in JavaScript, they can be declared anywhere and passed as parameters, resulting in code with lots of anonymous functions cluttering things up. To make code more compact the arrow syntax was created, replacing the need for the function keyword with the symbols => placed after the paramter declaration.
* () => 3; this is a function in arrow syntax that always returns 3.
* Equivalent functions:
  * a.sort(function (v1, v2) {return v1-v2;});
  * a.sort((v1,v2) => v1-v2); this is an arrow function.
 
This pointer:
* arrow functions inherit the this pointer from the scrope of where it is created. This makes what is known as a closure. A closure allows a function to continue referecing its creation scope, even after it has passed out of that scope.
  * This allows JavaScript to remember the values of variables when the function was created instead of what they are when they are executed.
 
* Debounce function: execute a specified function once within a given time window. Any requests to execute the debounce function more frequently than this will cause the time window to reset. this is important in cases where a user can trigger expensive events thousands of times per second. Without a debound the performance of your application can greatly suffer.

## JavaScript Array:
* array object has several functions associated with it:
  * push: add an item to the end of the array
  * pop: remove an item from the end of the array
  * slice: return a sub-array
  * sort: run a function to sort an array in place
  * Values: creates an iterator for use with a for of loop
  * Find: find the first item satisfied by a test function
  * forEach: run a function on each array item
  * reduce: Run a function to reduce each array item to a single item
  * map: run a function to map an array to a new array
  * filter: run a function to remove items
  * every: run a function to test if all items match
  * some: run a function to test if any items match

## JSON: 
* JSON provides a simple, but effective way to share and store data. jSON is easily convertible to, and from, javaScript objects, making it a very convenient data format when working with web technologies. Because of its simplicity, standardization, and compaibility with JavaScript, JSON has become one of the world's most popular data formats.
* A JSON document contains one of the following data types:
  * string
  * number
  * boolean
  * array
  * object
  * null
* JSON is always encoded with UTF-8.
* You can convert JSON to, and from, JavaScript using the JSON.parse and JSON.stringify functions.
* JSON cannot represent JavaScript undefined object, so it gets dropped when converting from JavaScript to JSON.

## JavaScript objects and classes:
* A JavaScript object represents a collection of name value pairs referred to as properties.
* The property name must be of type String or Symbol, but the value can be of any type. Objects also have common object-oriented functionality such as constructors, a this poitner, static properties and functions, and inheritance.
* Objects can be created with the new operator. This causes the object's constructor to be called. Once declared you can add new properties to the object by simply referincing the property name in an assignment. Any type of variable can be assigned to a property. This includes a sub-object, array, or function. The properties of an object can be referenced either with dot (obj.prop) or bracket notation (obj['prop']
* object can refer to standard JavaScript Object object (Promise, Map,, Objecdt, Function, Date...) or it can refer to any JavaScript object you create.
* Can declare a variable of object type with the objet-literal syntax, allowing you to provide the initial cmposition of the object:
  * e.g. const obj = { a: 3, b: "fish", };
  * This is essentially a dictionary
* Object functions:
  * Entries: returns an array of key value pairs
  * Keys: returns an array of keys
  * Values: returns an array of vlaues
* Constructor: any function that returns an object is considered a constructor and can be invoked with the new operator.
* Classes: can be used to define objects. Using a class clarifies the intent to create a reusable component rather than a one-off object. Class declarations look similar to an object but have an explicit constructor and assumed function declarations.
  * class Person {
    * construtor(name) { this.name = name;}
    * log() { console.log("My name is ' + this.name);}}
* Make properties and functiosn of classes private by prefixing them with a #. e.g. #name
* Inheritance: Classes can be extended by using the extends keyword to define inheritance. Parameters that need to be passed to the parent class are delivered using the super funciton. Any functions defined on the child that have the same name as the parent override the parent's implementation.
  * class Employee extends Person {
    * constructor(name, position) { super(name); this.position = position;} 
  * Override a parent attribute or function by explicitly redefining it.

## Regular Expressions
* Built right into JavaScript
* Can create a regular expression using the class constructor or a regular expression literal.
* const objRegex - new RegExp('ab*', 'i');
* const literalRegex = /ab*/i;
* The string class has several functions that accept regular experessions, including match, replace, search, and split. For a quick test to see if there is a match you can use the regular expression object's test function.
  * If you had a string called text, you could use text.match(regexobject)
  * text.replace(petRegex, 'animal');
  * petregex.test(text)
* RegEx Flags:
  * d: generate indices for substring matches
  * g: global search
  * i: case-insensitive search
  * m: allows ^ and $ to match newline characters
  * s: allows . to match newline characters
  * u: treat a pattern as a sequence of Unicode code points
  * v: an upgrade to u mode with more unicode features
  * y: performa  sticky search that matches starting at the current position in the target string
 
## JavaScript Rest and spread
* Sometimes you want a function to take an unknown number of parameters. Rest syntax is very useful for this.
* For example, function hasNumber(test, ...numbers) {return numbers.some((i) === test);}
  * will take in a number to test and an array of numbers. The ...numbers tells the program to create an array out of the remaining elements after test has been defined with the first element. Then you can run hasNumber with any sequence of numbers, you want.
* Only the last parameter can be a rest parameter, otherwise JavaScript wouldn't know which parameters to combine into an array
* Spread: does the opposite of rest. Takes an object that is iterable (array or string) and expands it into a functions parameters
  * const p = person(...['Ryan', 'Dahl']);

## JavaScript exceptions
* supports exception handling using the try, catch, and throw syntax. Also finally.
* Fallback pattern is commonly implemented using exception handling. To implement this, you put the normal feature path in a try block and then provide a fallback implementation in the catch block. For example, normally you would get the high scores for a game by making a network request, but if the network is not available then you can use a locally cached version of the last available scores. By providing a fallback, you can always return something, even if the desired feature is temporarily unavilable. 

## Destructuring
* Process of pulling indvidual items out of an existing one, or removing structure. Can do this with arrays or objects.
* const a = \[1,2,4,5]
* const \[b,c] = a; This takes the first two values from a and assigns them to b and c. 
* console.log(b,c) will yield 1, 2
* you can also use rest syntax to combine multiple items from the original object
  * Ex.: const \[b, c, ...others] = a;
  * console.log(b,c,others); will yield 1, 2, \[4,5]

## Scope
* Scope is defined as the variables that are visible in the current context of execution
* JavaScript has four different types of scope
  * Global: visible to all code
  * Module: visible to all code running in a module
  * Function: visible within a function
  * Block: visible within a block of code delimited by curly braces
* initially javascript used var to declar a variable, but var ignores block scope, unlike const or let .Thus, variables declared with var are always logically hoisted to the top of the function.
* Strongly suggested never to use var
* This keyword
  * represents a variable that points to an object that contains the context within the scope of the currently executing line of code. The this variable is automatically declared and you can reference this anywhere in a JavaScript program. Because the value of this depends upon the context in which it is referenced, there are three different contexts that this can refer to.
    * Global: when this is referenced outside a function or object it refers to the globalThis object. This represents the context for runtime environment.
    * Function: when this is referenced in a function it refers to the object that owns the function. That is either an object defined by your or glboalThis if the function is defined otuside of an object. Global function's this variable is undefined instead of globalThis when running in JavaScript strict mode
    * Object: when this is referenced in an object it refers to the object.
   
* Closure: defined as a function and its surrounding state. Whatever variables are accessible when a function is created are available inside that function. This holds true even if you pass the function outside of the scope of its original creation.

## Modules   
* JavaScript modules allow for the partioning and sharing of code.
* Node.js modules are called CommonJS modules and JavaScript modules are called ES modules
* Modules create a file-based scope for the code they represent, so you must explicitly export the objects from one file and the import them into another file.
* modules can only be called from other modules.
* From HTML, you can specify that you are using an ES module by including a type attribute with the value of module in the script element.
* When using web framework bundler, you usually don't need to worry about differentiating between global scope and ES module scope. The bundler will inect all necessary syntax to connect HTML to your modules.

## Document Object Model (DOM)
* DOM is an object representation of the HTML elements that the browser uses to render the display.
* Browser provides access to the DOM through a global variable name document that points to the root element of the DOM. If you open the browser's debugger consle window and type the variable name document you will see the DOM for the document the browser is currently rendering.
* Every element in an HTML document implements the DOM element interface.
* function displayElement(el) {
* console.log(el.tagName);
* for (const child of el.childre) {
* displayElement(child);}}
* displayElement(document)
* Use document.querySelectorAll('p'); This will select elements from the document. The textcontent property contains all of the element's text.
* Modifying the DOM
  * ability to insert, modify, or delete elements in the DOM. First create a new element on the DOM document. You then insert the new element into the DOM tree by appending it to an existing element in the tree.
  * function insertChild(parentSelector, text)
  * insertChild('#courses', 'new course');
  * deleteElement(elementSelector)
  * deleteElement('#courses div');
* Injecting HTML
  * DOM allows you to inect entire blocks of HTML into an element. However, this is a common attack vector for hackers. if an untrusted party can inject javascript anywhere in your application then that javascript can represent itself as the current user of the application. Attacker can then make requests for sensitive data, monitor activity, and steal credentials.
  * If injecting HTML, make sure it can't be manipulated by a user. sanitize any HTML that contains variables or simply use DOM manipulation functions instead of using innerHTML.
 
Event listeners:
* All DOM elements support the ability to attach a function that gets called when an event occurs on the element. These functions are called event listerners.
  * clipboard: cut, copied, and pasted
  * focus: an element gets focus
  * keyboard: keys are pressed
  * mouse: click events
  * text selection: when text is selected
 
* event listeners can also be added directly in the HTML. 
 
## Local Storage:
* Four main functions that can be used with localStorage:
  * setItem(name, value): sets a named item's value into local storage
  * getItem(name): Gets a named item's value from local storage
  * removeItem(name): Removes a named item from local storage
  * clear(): clears all items in local storage
* browser's localStorage API provides ability to persistently store and retrieve data (scores, usernmaes, etc.) on a user's browser across user sessions and HTML page renderings.
* localStorage is also used as a cache for when data cannot be obtained from the server. For example, frontend JavaScript could store the last high scores obtained from the service, and then display those scores in the future if the service is not available.

## Promises
* The rendering thread of HTML executes on a single threaded, meaning that you can't take a long time processing JavaScript on the main rendering thread. Long running, or blocking tasks, should be executed with the use of a JavaScript Promise. The execution of a promise allows the main rendering thread to continue while some action is executed in the background. You create a promise by calling the Promise object constructor and passing it an executor function that runs the asynchronous operation.
* Executing asynchronously means that promise constructor may return before the promise executor function runs. The state of promise execution is always in one of three states:
  * Pending: currently running asynchronously
  * fulfilled: completed successfully
  * rejected: failed to complete
* JavaScript has a setTimeout function that creates a delay in the execution of the code. It takes the number of milliseconds to await and a function to call after that amount of time has expired.
* Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value
* Resolving and rejecting
  * Need to be able to set the state to fulfilled when things complete correctly, or to rejected when an error happens.
  * Promise executor function takes two functions as parameters, resolve and reject. Calling resolve sets the promise to the fulfilled state, and calling reject sets the promise to the rejected state.
* Then, catch, finally
  * Promise object has three functions: then, catch, and finally. The then function is called if the promise is fulfilled, catch is called if the promise is rejected, and finally is always called after all the processing is completed.
 
## Async/Await
* Larger systems are helped by more concise representation of promises. This is provided by async/await syntax.
* await keyword wraps the execution of a promise and removed the need to chain functions. The await expression will block until the promise state moves to fulfilled, or throws an exception if the state moves to rejected.

Async, try/catch version:
try {
  const result = await coinToss();
  console.log(`Toss result ${result}`);
} catch (err) {
  console.error(`Error: ${err}`);
} finally {
  console.log(`Toss completed`);
}

* Await cannot be called unless it is called at the top level of the JavaScript, or is in a function that is defined with the async keyword.
* Applying async keyword transforms the function so that it returns a promise that will resolve to the value that was previously returned by the function. Basically, this turns any function into an asynchronous function, so that it can in turn make asynchronous requests.
* Async keyword declares that a function returns a promise. The await keyword wraps a call to the async function, blocks execution until the promise has resolved, and then returns the result of the promise.
* combine async with await to create code that is asynchronous but still maintains the flow of code without explicitly using callbacks. 

# Lecture 2/16/2024
* spread operation: take values within an array and spread into some other context. use ...values
* Rest, handles the rest of possible parameters that you can pass in somewhere.
* spread is ...someotherobj
* Optional chain: use x.r?.() which will call the r attribute of x if it exists (? is if r exists). Otherwise use || fallback() function.
* destructuring:
  * a = [1, 2]
  * x = a
  * \[x] = a will return  1 for \[x]. It takes the first value from a.
  * could also do \[x, y, z] = a, which will take the first three values (if they exist, otherwise it will take up to the end).
  * \[x, y, z = 100] will take the first two values, have the third = 100
  * \[x, ,y, ...z] = \[1,2,3,4,5,6,7] will return the first and third values, then the rest of the array as an array
  * Destructuring is very useful. I don't know what the user is giving me
  * syntax of a json file is a map
  * json.stringify(obj)
  * json.parse(objText);
  * between stringify and parse, functions will be lost
  * don't recommend doing modules in my project (make everything global), react will do modules for me
## DOM: Document object model
  * Combination of HTML and CSS being put into a data structure
  * document is the object representing the top level node of my entire website.
  * CSS selectors
  * listelements = document.querySelectorAll('p');
    * for (const el of listofelements) console.log(el.textcontent)).
  *  document.querySelector('#t')
  *  DOM = Document object model
  *  Be careful with inserting stuff into the document, people can insert javascript (malware) into your code
  *  Instead do insertChild(selector, text)
  *  newchild.textContent
  *  button onclick = "call javascript function"
  *  Event categories: clipboard, focus, keyboard, mouse, text selection, others

## Local Storage: Saving Data
* I need a database to call, but for now use localStorage
* localStorage.setItem('user', user);
* localStorage.setItem('object', JSON.stringify(myObject)
* On application tab of inspect, can see all of the local storage data.

# Lecture 2/20/2024
## Promises
* Rendering of HTML page is single-threaded, meaning it is only executing one thing at once.
* Everything in JavaScript must be asynchronous (because if it's not, running simple functions can lock up the page due to single-threading).
* Pending = currently running asynchronously
* fulfilled = completed successfully
* rejected = failed to complete
* to create a promise, do: new Promise((resolve, reject) => resolve(true));
* promise has a prototype: promise, promisestate: fulfilled, promiseresult: true
* resolve is the function to call that does the work of the function

* Function callback(resolve, reject) { resolve('done');
* const p = new Promise(callback);
* p.then((resolve_result_ => console.log(resolve_result)); //when callback resolves, then call this.
Promise sytanx:
* .then (result) => console.log...
* .catch((err) ...
* .finally (()...

await syntax:
* try {
* const result = await toosCoin; (will block until it resolves or rejects
* console.log(...)
* }
* catch (err) {...}
* finally {...}

* rule for using await
  * top level module function
  * or called from an async function
 
* async will auto-generate a promise if not explicitly returned.

# Lecture 2/21/2024 Debugging JavaScript
* How to debug JavaScript
1. Console.log debugging
2. source debugging
* If JavaScript isn't working as expected, use console debugger
* Console will link me directly to where the JavaScript error is
* SetInterval function in Simon is similar to setTimer, injects every 5 seconds. 

# Kahoot 2/23/2024:
* sudo deploy.sh
* ls -la: list long, find the 
* chmod +x deploy.sh: sets a file to be executable
* ssh deploy.sh
* JSON: key is always a string: \{"x":3}
* querySelector('p') only targets one 'p' element, queryselectorall('p') selects all elements
* div stands for division.
* CNAME: An alias that points to another DNS record
* A record maps hosts name to address
* SOA: Startup authority: who is dns registrar
* TXT: stick text in and associate it with a hostname
* /A|f/ is the regex, i is a toggle for noncapitalization

# Lecture 2/26/2024 Servers Introduction
* How does the Internet Work? Originally came from the military. Didn't want top-level node to be taken down and cause everything else to go down. So the internet is very loosely coupled/tied.
* DNS = Domain Name System
* Domain name associated with DNS record
* Telling it how you get from your domain name to IP address
* Amazon owns a ton of IP addresses. Each IP address is about $30
* Internet naming authority leases IP addresses
* Limited ipv5 infrastructure. Newer ipv6 infrastructure is theoretically unlimited, but it's much more limited

Many layers to networks
1. Application: ex. https; purpose: functionality like web browsing
   * https, ssh, ping, different protocols
2. Transport; Ex. TCP/UDP; purpose: moving connection information packets
   * Makes sure  makes sure packets get places properly
   * TCP: this is the start of my data, this is the exact sequence, etc. Most reliable
   * UDP: Doesn't matter as much to have all the packets perfectly. Faster. Ex. Shooter games need to be fast, low latency, doesn't matter if a few packets are lost
3. Internet: Ex. IP; Purpose: establishing connections
   * Segments information into small packets
   * How data is processed
4. Link; Ex. Fiber, harware; purpose: physical connections

* Consider taking networking elective CS 324
* Server vs. service. vs. endpoints
* Simon Game service:
* Port: IP address gets me to the machine, but there can be multiple connections to that machine.
* Port 443 is the secure HTTP port. That's the initial connection port, then it will connect you to another port.
* Live Server just grabs two different ports
* You generally don't want to configure it so you allow traffic on port 443 because it opens it up to anyone.
* Computers don't make very good servers because IP address changes all the time.
* We opened up SSH, HTTPS ports, etc. Internet Naming authority determines specific ports for various protocols.
* Don't want to open up stuff for anyone
* Hosting multiple services? We use three
  * We will use Caddy: static website hosting, reverse proxy
 
* Three parts of a domain name
* tld: top level domain: ex. .com, org, edu, gov, mil, int, net, uk, cn, tv, click, gold, cro, fishing
* Secondary domain ex. makeamatch.com
* You can have any number of subdomains
* localhost. Ask for domain name localhost, then it gives it to you. Local host is 127.0.0.1 (live server uses this)
* DNS Record types:
  * A/AAAA: Address.Specific IP addresses. IPV4 and IpV6
  * CName: Name.Alias
  * NS: Name Server. Authroity for queries and proof of ownership
  * Text: metadata. used for policies and verification
  * SOA: start of authority. Propagation information.
 
* IANA
  * Registrar
 
# Lecture 2/28/2024: Fetch, URL, ports, HTTP
* Fetch
* Execute a fetch request using a url:
* fetch(url).then (r => r.text())
* .then(text => console.log(text))

* fetch is another example of a promise returning

* fetch('https://apisomething').then(r => r.json())
* .then(j => console.log(j.value))

* With API, I most likely want to use something that will give me JSON, so I can just convert it.

* const r = await fetch('https://api.quotable.io/random')
* const j = await r.json()
* console.log(j.content)

* A fetch contains a promise that when it returns, will include the content from what we want to get from the API.
* Fetch can be called from anywhere
* Endpoints examples
  * post/user
  * get/user
  * get/scores
  * get/user/route
 
* Objects have methods. Servers have endpoints. endpoints are to servers as methods are to objects.
* Service can also make fetch requests. Database service and websocket in the case of this class.
* With fetch, be careful about who you are asking and make sure they are fast
* My server has three services running:
  * Caddy: loading up startup html and returning it
  * Simon service
  * Startup service
* Each of these uses a different port.
* sshd: ssh demon; waits on port 22 for if you use ssh command.

* URL = uniform resource locator
* https://(scheme)byu.edu(domain):443(port)/api/city(path)?q=pro(parameters)#3(anchor)
* if you are using https://, then you should use port 80.
* I will need to specify the path/endpoints.
* API stands for application programming interface
* Parameters go to the resource.
* The anchor is a subindex into the resource. It takes you into one part of the page.
* www is just a subdomain. Convention meaning that you are a webserver
* Standard ports
* HTTP requests:
  * Method path version
 
* Methods:
  * Get: get an existing resource
  * post: create a new resource
  * put: update an existing resource
  * delete: delete the resource
  * options: get more information about resource
 
* Status codes:
  * 200 means success, 204 no content
  * 300 is good, but not giving back the thing you asked for; 301/302 redirect, 304 not modified
  * 400: bad request, 404 not found, 403 forbidden, 429 too many requests
  * 500: server error, server not available

# Lecture 3/1/2024
* Ryan Dahl created Node.js
* Node.js releaed in 2009
* 2010: Node Package Manager (NPM) released
* Everyone was moving to Node.js by 2011.
* V8 is a javascript interpreter that is used for Google chrome.
* Node: javascript runtime
* Node.js also has NPM: Node package manager
  * allows you to go to huge open source repository, pull stuff from there, include it in your code
*  Node version manager (NVM): good if I want to do a lot of web dev after this class, easily switch between versions.
*  Node.js installation is the simple way
*  Can also install NVM and use that to install it.
*  Windows installation: run windows-nvm
*  nvm install lts
*  nvm use lts

Node Package manager
* access to massive library of packages
* Install project

* Frontend = running on browser
* Backend = running on server

* Use NPM
  * mkdir npmtest
  * cd npmtest
  * npm init -y
 
* const giveMeAJoke = require('give-me-a-joke');
* giveMeAJoke.getRandomDadJoke((joke) => { console.log(joke);});

* Using Node.js to make a service
* fetch("https://localhost:3000")
* app.listen(3000)

* const https = require('http')
* const server = https.createServer(function req, res) {
* res.writeHead(200, { 'Content-Type': 'text/html' });
* res.write('<h1>Hello Node.js!</h1>');
* res.write(`<p>[${req.method}] $req.url}</p>`);
* res.end();
* });

* server.listen(3000, () => {
* console.log(`Web service listening on port 3000`);
* r = await fetch('http://localhost:3000/joe")

# Server Reading Notes
* Devices must have IP addresses for devices to talk to each other
* We use a symbolic name instead of an IP address. This is the Domain name. Domain names are converted to an IP address by doing a lookup in the Domain Name System (DNS). You can look up the IP address for any domain name using the dig console utility

* Traceout: allows you to trace the route of a connection. Ex: traceroute byu.edu
* Network internals:
  * Sending data uses the TCP/IP model.
 
* Application, transport, internet, and link layers.
* TCP/IP protocol is application layer, representing user functionality, like HTTP, SMTP, FTP, SSH, and IRC
* Transport layer breaks application layers information into small chunks and sends the data
* Actual connection is made using internet layer, finding the device you want to talk to and keeping the connection alive
* Bottom of the model is the link layer, which is where there are physical connections and hardware.

## Web Servers
* Most modern programming languages have libraries that provide ability to make connections and serve up HTTP. This makes it possible to build services right into a web application
* Microservices: Web services that provide a single functional purpose. By partitioning functionality into small logical chunks, you can develop and manage them independently from other functionality on a larger system.

## Domain Names
* You can get a domain name by using the dig console utility: dig amazon.com
* Domain names are broken up into a root domain, secondary domain, and top level domain
* You can get information about a domain name from the domain name registry using the whois console utility
* DNS: Once a domain name is in the registry, it can be listed with a DNS server and associated with an IP address.
* Address(A) record: straight mapping from a domain name to IP address
* CNAME(canonical name) records: maps one domain name to another domain name, acting as a domain name alias. This can be used to map byu.com to byu.edu so that either can be used.
* TTL setting for domain record.
* Leasing a domain name: you can pay to lease an unused domain name for a period of time. You have the right to extend the lease for an additional amount of time. 

## Web services Introduction
* Up to this point, application is loaded from web server and runs on the user's browser. It starts when the broswer requests the index.html file from the web server. All of these files that are running on the browser are the frontend of my application. It is using the HTTPS protocol for this.
* From frontend javascript, we can make requests to external services.
* Next step in building a fullstack application is to create a web service, which can provide the static frontend files along with functions to handle fetch requests for things like storing data persistently, providing security, running tasks, and executing application logic that you don't want user to be able to see. The functionality provided here is the backend.
* Functions provided by a web service are called endpoints or APIs. Access endpoints from frontend Javascript with the fetch function.
* Backend service can also use fetch to make requests to other web services.

## URL
* URL = uniform resource locator: represents the location of a web resource, which can be anything, like a web page, font, image, video stream, database record, or JSON object.
* scheme: protocol required to ask for the resource (like https)
* Domain name (like byu.edu)
* Port
* path
* parameters: represent a list of key value pairs, usually providing additional qualifiers on the resource represented by the path
* Anchor: usually represents a sub-location in the resource.
* URL, URN, and URI
* URN = uniform resource name
* URI = uniform resource identifier

## Ports:
* 20: File transfer protocol (FTP) for data transfer
* 22: Secure shell (SSH) for connecting to remote devices
* 25: Simple Mail Transfer Protocol (SMTP) for sending email
* 53: Domain Name System (DNS) for looking up IP addresses
* 80: HTTP
* 110: Post Office Protocol (POP3) for retrieving email
* 123: network Time Protocol (NTP) for managing time
* 161: Simple Network Management Protocol (SNMP) for managing network devices such as routers or printers
* 194: Internet Relay Chat (IRC) for chatting
* 443: HTTPS

## HTTP
* How the web talks
* When a web client and a web server talk they exchange HTTP requests and responses. The browser makes an HTTP request and the server generates a response.
* You can see the HTTP exchange by using the browsers debugger or by using a console tool like curl.
* ex. curl -v -s http://something.html

* HTTP request
* HTTP response: similar to request
* HTTP Verbs used by request
  * GET: get the requested resource
  * POST: Create a new resource. The body of the request contains the resource. The response should include a unique ID of the newly created resource
  * PUT: Update a resource
  * DELETE: delete a resource
  * OPTIONS: Get metadata about a resource: usually only HTTP headers are returned, not the resource itself.
 
* Status codes
  * 1xx Informational
  * 2xx Success
  * 3xx Redirect to some other location; cached resource still valid
  * 4xx client errors; invalid request
  * 5xx Server errors; request cannot be satisfied due to an errors on the server
 
* Headers: specify metadata about a request or response; this includes things like how to handle security, caching, data formats, and cookies.
  * Authorization: a token that authorizes the user making the request
  * Accept: the format the client accepts
  * Content-type: format of the content being sent
  * Cookie: key value pairs that are generated by the server and stored on the client
  * Host: the domain name of the server, required in all requests.
  * Origin: Identifies the orgin that cuased the request
  * Access-control-allow-origin: Server response of what origins can make a request
  * Content-length: the number of bytes contained in the response
  * cache control: tells the client how it can cache the response
  * user-agent: the client application making the request
 
* Body: the format of the body of an HTTP request or response is defined by the Content-type header.

* Body: format of the body of an HTTP request or response is defined by Content-type header.
* Cookies: HTTP is stateless, so it doesn't know anything about a previous or future request. But cookies can help track state. Cookies are generated by a server and passed to the client as an HTTP header.

* HTTP versions: constant evolution
  * HTTP0.9
  * HTTP1
  * HTTP1.1
  * HTTP2
  * HTTP3
 
## Fetch
* Ability to make HTTP requests from JavaScript is one of the main technologies that changed the web from static content pages to one of web applications that fully interact with the user.
* Fetch API is the preferred way to make HTTP requests.
* Fetch takes a URL and returns a promise. The promise then function takes a callback function that is asynchronously called when the requested URL content is obtained.
* To do a POST request, populate options parameter with the HTTP method and headers
* fetch('stuff...', {
  * method: 'Post',
  * body: ...
  * }),
  * headers: {...
 
# Node.js notes
* Created by Ryan Dahl
* Node.js took the V8 engine of google and ran it inside of a console application.
* Installing NVM and Node.js: web server comes with it already installed.
* Once installed, you can execute javascript with node.js from console using node -e ("passed in parameter, function, etc")
* You can also use node index.js, which will then run index.js from the console, or any other file you pass in
* You can also run node in interpretive mode by executing without any parameters and typing javascript directly into interpreter
* node
  * 1 + 1 -> 2
  * console.log("hello") -> hello
*  Can be helpful to use preexisting packages of javasctipt for common tasks. to load a package, install the package locally using NPM (node package manager) and then include a require statement in your code that references the package name. NPM is automatically installed with Node.js
* Search for packages on NPM using the NPM website.
* in order to start using NPM to install packages, you first need to create a directory that will contain your javascript, then run npm init
* mkdir npmtest
* cd npmtest
* npm init -y
* This will create a file named package.json. This contains metadata about project, commands (scripts that you can execute to do things like run, test, or distribute your code, and packages that the project depends on.
* npm install give-me-a-joke
* If you no longer want a package dependency, use npm uninstall <package name here>
* When you start installing package dependencies, NPM will create an additional file called package-lock.json and a directory named node_modules. Node_modules directory contains actual JavaScript files for the package and all of its dependent packages. As you isntall several packages, this directory wil get very large. Don't check this directory into source control system as it can get large.
* Include node_modules in your .gitignore file
* Any time you clone source code from GitHub to a new location, first thing you should do is run npm install in the project directory. This will cause NPM to download all previously installed packages and recreate the node_modules directory.
* package-lock.json file tracks version of the package you installed.
* const giveMeAJoke = require('give-me-a-joke');
* giveMeAJoke.getRandomDadJoke((joke) => {console.log(joke);});

# Express:
* Express is a node package that provides routing requrests for service endpoints, manipulation of HTTP requests with JSON body content, generating HTTP responses, and using middleware to add functionality
* Create an express application by using NPM to install the Express package and then calling the express constructor to create the Express application and listen for HTTP requests on a desired port.
* npm install express. 

* const express = require('express');
* const app = express();
* app.listen(8080);
* With the app object, it is now possible to add HTTP routing and middleware functions to the application.

## Defining routes
* HTTP endpionts implemented by defining routes that call a funciton based upon an HTTP path. The Express app object supports all of the HTTP verbs as functions on the object.
* Express app object supports all HTTP verbs as functions on the object. For example, for route function that handles an HTTP GET request, call the get method on the app
* app.get('/store/provo', (req, res, next) +> {
* res.send({name: 'provo'});
* get function takes two parameters, a URL path matching pattern, and a callback function that is invoked when the pattern matches.
  * The callback function has three parameters that represent the HTTP request object (req), the HTTP response object (res), and the next routing function that Express expects to be called if this routing function wants another function to generate a response.
  * rewrite to app.get('/store/:storeName'...
  * The colon creates a map of path parameters and populates it with matching values found in the URL path. You can then reference the parameters using the req.params object
 
## Using middleware
* Standard pattern has a mediator and middleware. Middleware represents componentized piecies of functionality
* Mediator loads middleware components and determines their order of execution.
* When a request comes to the mediator it then passes the request around to the middleware components. Following this pattern, Express is the mediator, and middleware functions are the middleware components.
* Express comes with a standard set of middleware functions. These provide functionality like routing, authentication, CORS, sessions, serving static web files, cookies, and logging.
* Routing functions are a form of middleware functions, but routing functions are only calld if associated pattern matches.
* middleware function has the following pattern:
  * function middlewareName(req, res, next)
 
* Creating your own middleware:
  * app.use((req, res, next) => {
  * console.log(req.originalURL);
  * next();
  * });
 
* Builtin middleware: Example: static middleware function
  * app.use(express.static('public));
  * Now if you create a subdirectory in project directory and name it public you can serve up any static content that you want. For example, you can create an index.html file that is the default content for your web service. Then you can call your web service without any path the index.html file will be returned.
 
* Third-party middleware:
  * Can also use NPM to install packages and including the package in javascript with the require function.
  * ex. npm install cookie-parser
  * const cookieParser = require('cookie-parser');
  * app.use(cookieParser());
 
* Error handling middleware: Can add middleware for handling errors that occur. Error middleware looks similar to other middleware functions, but takes addtional err parameter that contains the error.
* function errorMIddleware name(err, req, res, next)
* If you wanted to add a simple error handler for anything that might go wrong while processing HTTP requests, you can add the following
  * app.use(function (err, req, res, next) { res.status(500.send(({type: err.name, message: err.message});
* Test that error middleware is getting used by adding a new endpoint that generates an error
  * app.get('/error', (req, res, next) => { throw new Error('Trouble in river city');});
 
Full example of web service built using Express:
* const express = require('express');
* const cookieParser = require('cookie-parser')
* const app = express();

* app.use(cookieParser());

# Lecture 3/4/2024
* Idea behind express is to wrap node.js server to make it easier to write the service
* fetch("https://simon-service.cs260.click/api/scores")
* TJ Holowaychuk created Express; open source
* Simple, but powerful
* Five main objects within Express:
  * express: constructor and default middleware
  * app: express application
  * req: request object
  * res: response object
  * router: adding child routing

* npm init -y
* npm install express
* Do this within the directory you want to use express for
* Create an index.js file
* in index.js file:
  * const express = require('express')
  * const app = express();
* app.get('*', (eq, res) => { res.send('<h1>Hello Express!</h1>');
* app.listen(3000).

* browser = client = frontend
* backend = server = application

* res.send('simple text') will render as simple text
* res.redirect(301, 'https://cs260.click')
* res.sendFile('public/index.html', { root : __dirnmae})
* res.status(400).send('trouble in River city')

## Middleware
* Common design
* Have a request that does something, then have next function that calls another request, which in turn returns a response (or another next).
* defining own middleware
  * app.use([path,] callback(req, res, next))
  * app.use(function (req, res, next) will always get called because it has no associated path
  * can't have to responses.
*  next is always based on what occurs next in the file
*  only include next if you actually want to go to the next function
* When debugging, keep in mind when you are on frontend vs. backend.
* Console.log won't always execute on frontend, it could be executing on the backend.

## Serving Up Static files
* app.use(express.static('public', {  root : __dirname}));
  * This will allow me to make everything in my static directory load onto the page.
 
* :something parameterizes urls
* * is a wildcard that matches anything between slashes.
 
## Simon implementation
* When you clone the repository, make sure to use npm install express


# Lecture 3/6/2024
* UML is a common diagramming model to help look at how things work
* Sequence diagram is one of the most common types of diagrams.
* sequencediagram.org allows you to do a textual description of the sequnce diagram see example: (https://sequencediagram.org/index.html#initialData=C4S2BsFMAIGEAsCGxqIA5oFCcQY2APYBO0AguCLpDvsdAEIEBG25lkAtAHwDKkRAN34AuPikQDEIcIiZRMjJtz6CRY1JOmz5igDy6OHFUKLC2VDVJlzq5yPsPGRDZpa03Md5fxOjgiIhRcAgA7EwBnZBBQ6AB3MHgXFj0DIx8RWFCIqJiiSABHAFdIcJQQglAAM0ockIVmb1VTUlwqNBQ7aGCw-kjQUPqlXnTTHkQAT2gAIgAJSHBwAinoQjIKKkwnIm47YVn5xeXKogIAWySgA)https://sequencediagram.org/index.html#initialData=C4S2BsFMAIGEAsCGxqIA5oFCcQY2APYBO0AguCLpDvsdAEIEBG25lkAtAHwDKkRAN34AuPikQDEIcIiZRMjJtz6CRY1JOmz5igDy6OHFUKLC2VDVJlzq5yPsPGRDZpa03Md5fxOjgiIhRcAgA7EwBnZBBQ6AB3MHgXFj0DIx8RWFCIqJiiSABHAFdIcJQQglAAM0ockIVmb1VTUlwqNBQ7aGCw-kjQUPqlXnTTHkQAT2gAIgAJSHBwAinoQjIKKkwnIm47YVn5xeXKogIAWySgA)
* If I find myself getting lost in what is happening, make a sequence diagram
* Often there will be a backend and frontend repository. Simon does backend in root directory, frontend in public directory.
* Look at sequence diagram to determine what functions you need for backend and frontend applications; example: set available
* Simon service endpoints:
  * Create accounts
  * Login
  * Logout
  * Get user: can grab cookies from previous logins
  * Get scores
  * Save scores
* HTTP is client to server (frontend to backend). WebSocket allows you to do it from either side (backend to frontend as well)
* Start from user focus, then transition to leveraging technologies
* Leverage Standards:
  * Transfer protocols: https, https, udp
  * http verbs: get, put, delete
  * MIME types: application/json, image/png
  * HTTP headers: cache, accept, cors
  * Data format: JSON, YAML
  * You need a really good reason if you decide to move away from these standard technologies.
 
* Endpoint design:
  * Service is kind of like a class, that has operations you can call on it. Those are called endpoints (or sometimes APIs)
  * Grammatical: noun/resource based
    * paths should represent an object, method should be a verb on that object 
  * Readable: /store/provo/order/28502
  * Simple: single responsibility principle: if you're doing a get on something, don't also update it. Do one thing and do it well
  * Documented: Open API; if you're going to make a service that is used by a lot of people, you want to document it well. Open API is a common, well-accepted specification form
 
* pick technologies well and then use them to full advantage
* Three categories of endpoint design:
  * RPC: Remote Procedure Calls: expose service endpoints as simple function calls. Usually just leverages POST HTTP verb.
  * REST (Representational state transfer): nobody does REST right. Attempts to take advantage of HTTP as much as possible. Using the verb properly and the path makes sense
  * GraphQL: Put all of the logic onto the client and get the server out of the picture. Provide all the parameters of what you want on the client side. Lots of applications use this

* Cross site request forgery: CORS

# Lecture 3/8/2024
* Frontend (Chrome)
* Backend (Node.js)
* I need to keep track of frontend vs backend

* npm init -y allows me to pull down packages from npm
* Make sure to keep frontend code and backend code separate

* I am able to separate the backend from the frontend because of node.js. Running node.js enables me to run the backend and load the frontend
* Debugging: need to make sure content is correct.
* need to set breakpoints for the frontend in chrome, set breakpoints for the backend in VSCode
* The frontend executes in the browser itself.
* All you have to do to send json is wrap something in a a javascript object. JavaScript plays really nicely with JSON.
* If you do need to change something on frontend, make sure it's within VSCode
* You can't hide frontend code, but you can hide your backend code.
* Chrome is not a development environment, it's a debugger

* Nodemon; makes it so you don't have to restart node debugger every time you change it.
* install it, will make it easier to debug my stuff
* Daemons -Pm2: Keeps your node service running
* Normally if you run node, when you exit out, it will just close everythnig
* Daemons makes it possible to run servers without being in it
* pm2 is running on my server, and it makes it possible for me to run my server without actually being in it.
* pm2 start index.js -n appname -- parameters

# Lecture 3/11/2024
* Don't ever mix my development environment with my production environment.
* Real companies often won't even let development engineers touch the production environment.
* Compliance issues
* Use deployment scripts instead
* More complex and realistic pipeline
  * Devlelopment: push to github -> automatic testing and auto-deploy -> staging: private testing environment for team to test -> continuous integration -> Manual deployment to production.
  * Could have more than this too. For example, enviornments for marketing, QA team, CEO, etc.
* There are benefits to deploying sooner. When things are low-stakes, you can definitely get away with it.
* Deployment scripts:
* Our model: stop, delete, replace, start
* More common model:
  * At least two or more servers hosting your service
  * Draing, stop, start...repeat. Update one or two at a time.
  * Elastic load balance: more common in a production environment.
 
* Gradual with error monitoring: you can tell your load balancer what percentage of servers to change; this is the canary appoach
* Blue/green: swap as a cluster. Always have two clusters up and running: one blue, one green.
  * If things go wrong, immediately move servers back to previous servers on the previous version.
  * Disadvantage: allocating a ton of hardware for this
  * Can use blue as staging environment, green as production environment. Then you can flip the two.
 
* A/B: Useful for marketing department. Shift what it looks like for some but not all users. View statistics/feedback and potentially allocate more service space to more servers if it looks good.
* Make it easy to do A/B testing
* Uploading files:
* Multer from NPM can be used for uploading files
* Bad idea for photo upload:
  * Limited space
  * No backup
  * Servers are transient
  * Multiple servers hosting data
* use a Storage Service

# Lecture 3/13/2024
* Types of data Storage solutions
  * mySQL; specializes in Relational queries (relational databases are very common)
  * Redis: memory cached objects, really fast
  * ElasticSearch: Ranked free text;
  * MongoDB: Developer productivity; JSON objects
  * DynamoDB: key value pairs; some Id and blob of data, efficiency, then DynamoDB is best
  * Neo4J: Graph-based-data
  * InfluxDB: Time series data
* MongoDB:
  * Database has one or more collections of data in it.
  * A collection is an array of some number of JSON objects.
  * Mongo is the javascript of databases; really versatile, can kind of do whatever you want with it
  * Search for the name of the object
  * id is usually automatically generated unless you tell Mongo what the id is
* Once set up on MongoDB ->
  * npm install mongodb
  * npm install mongo
* const { MongoClient } = require('mongodb');

* const unerName =
* const password =
* const hostname =
* const url =
* const client = new MongoClient(url);
* const db = client.db

* client
  * .connect()
  * .then((  => db.command({ping:1}))
  * .then((
 => console.log(`Cnnected`))
.catch((ex)

* MongoDB isn't relational, which can be a disadvantage depending on the use case

# SOP and CORS
* Security should be on your mind when on the web
* Same Origin Policy (SOP) was created to allow JavaScript to make requests to a domain only if it is the same domain that the user is currently viewing. This provides security, but introduces complications. If you want to build a service that any web app can use, it would also violate SOP and fail
* CORS (Cross Origin Resource Sharing) was invented to address this
* CORS allows client to specify the orgin of a request and then let the server respond with what origins are allowed.
* CORS is only meant to alert the user that something nefarious is being attempted, but a hacker can still proxy requests through their own server to the course website and ignore the Access-control-allow-origin header.
* If you want to make requests to a different domain than the one your web app is hosted on, make sure the domain allows requests as defined by the Access-control-allow-origin header it returns.
* Because of CORS and some services not allowing API calls, you need to test services you want to use before you include them in your application.

# Service Design
* Web services provide interactive functionality of web application.
* Model and sequence diagrams are helpful to model application's primary objects and the interactions of the objects.
* Leveraging HTTP; use it
* endpoints: web service usually divided up into multiple service endpoints. Each endpoint provides a single functional purpose.
* Designing service endpoints: make them
  * Grammatical (everything is a resource (noun) that you act on (HTTP verb)
  * Readable: resource you request should be clearly readable in the URL path
  * Discoverable; when providing endpoints that contain other resources, make sure only the top level endpoint needs to be remembered
  * Compatible: make sure you can add new functionality without breaking existing clients
  * Simple
  * Documented
 
Models for exposing endpoints: three common ones
* RPC: Remote Procedure calls; exposes service endpoints as simple function calls, leveraging post http verb; maps directly to function calls that might exist within the server
* REST: Representational State transfer; REST HTTP verbs always act upon a resource
* Operations on a resource impact the state of the resource as it is transferred by a REST endpoint call
* GraphQL: focuses on manipulation of data instead of a function call or a resource. Query that specifies the desired data nd how it should be joined and filtered; has a lot of information in one place.
* GraphQL helps remove a lot of the logic for parsing endpoints and mapping requests to specific resources. IN graphQL there is only one endpoint, the query.

# Service Daemons
* Program automatically terminates when you close console or computer restarts
* To keep programs running after a shutdown, you need to register it as a daemon.
* Process manager 2 (PM2) is an example of a daemon
* PM2 is installedin production server as part of AWS AMI
* run pm2 ls to see pm2 in action

Registering a new web service: 
* to setup another subdomain, add the rule to the Caddyfile to tell it how to direct requests for the domain
* Create a directory and add the files for the web service
* Configure PM2 to host the web service.

* Modify caddyfile
  * SSH into server
  * copy section for startup subdomain and alter it so that it represents the desired subdomain
  * sudo service caddy restart to make sure caddy works after this
  * Configure PM2 to host the web service
 
# Debugging Node.js
* Use debug tools built into VS code: use F5 to debug in node.js
* Nodemon; once you start writing complex web applications you will find yourself making changes in the middle of debuggin sessions and want node to restart automatically and update the browser as changes are saved.
* Nodemon package is a wrapper arounde node that watches for files in the project directory to change. When it dectects that you saved something it will automatically restart node

# Development and production environments
* Critical to separate where you develop your application from where the production release of application is made publicly available.
* Never consider production environment as a place to develop or experiment with your application
* You may shell into production environment to configure a server or debug a production problem, but deployment should happen using an automated CI process
* Automated deployment process is the way to go.
* Look up bash script tutorial for how to script automatic deployment.

# Storage Services:
* Web applications commonly need to store files associated with the application or the users of the application. This includes files like images, user uploads, documents, and movies. Files usually have an ID, metadata, and bytes representing the file itself.
* Don't store files directly on server
  * server has limited space
  * Server is temporary and can be thrown away and replaced by a copy at any time
  * Need backup copies of application and user files; only one copy of files, and they will disappear when server disappers.
 
* AWS S3
  * Unlimited capacity
  * Only pay for what you use
  * Optimized for global access
  * keeps multiple redundant copies of every file
  * Can version the files
  * It is performant
  * It supports metadata tags
  * You can make files publicly avaialbe directly from S3
  * You can keep files private and only accessible to your application
 
* To use storage with AWS SDK, generally includes
  * Create S3 bucket to store data in
  * Get credentials so application can access the bucket
  * Use credentials in application
  * Use SDK to write, list, read, and delete files from bucket
 
* Do not include credentials in code   

# Data Services
* Web applications commonly need to store app and user data persistently. Historically, SQL databases have served as general purpose data service solution, but other data services began starting around 2010 addressing special data solutions
* Mongo has no strict scheme requirements for type and definition beforehand
* first step for using mongo in application is to install mongodb package using npm

# Lecture 3/18/2024
* Storing passwords can't just be in local storage
* Very important to create multiple layers to protect data
* Store password hashes rather than the password itself
* Good hashes are one-directional. That way if someone gets into the database, they still don't actually know what your password is
* Hashes are not the same as encryption, which can be reversed
* Would need hash and you need the hash algorithm

* Hash table attack
  * Have table of values that are commonly used, see if any of the commonly used passwords have matching hashes
 
* Salted passwords
  * Generate a random number: adding more on top of the hashed password. Doesn't stop attackers but greatly slows them down. Then you need access, the hash algorithm, and hash for every candidate
 
* brcrypt npm package which does salting, hasing, and comparing all for us
  * hashed password = await bcrypt.hash("toomanysecrets", 10);
  * if (await bcrypt.compare("toomanysecretes", hashedPassword)) { console.log("asswords match");
 
* Authorization tokens
  * Common to authenticate once, generate an authorization token, which is sufficient for any other time you need to be authenticated
  * Tokens are also stealable
  * Expiring tokens are very common
 
* Google uses rotation to use the prior token to create a new token
* Cookies:
  * Some things like preferences that you might want to store on the client, that don't really need authentication.
  * Cookies can be used to uniquely identify users
 
* Cookies can be used for good and evil
* Some optional parameters that can be set for cookies
  * secure; makes cookies secure
  * httponly; only sent over http fetch requests. Javascript can't read the cookie
  * samesite=strict; no third party site can look at your cookies
  * can also do other samesite parameters
  * expires parameter; set when the cookies expire
     

# Authorization Services
* Users need to be authenticated by asking for information
* For some period, a user is authenticated by storing an authentication token on the user's device. Often, that is stored in a cookie that is passed back to your web service on each request.
* After authentication, there is also authorization Users may be authorized to be able to do different things
* Authorization and authentication become complex very quickly. It is a primary target for a hacker.
* Authorization services often use standard protocols for authenticating and authorizing. These include OAuth, SAML, and OIDC. They also support Single Sign on (SSO) and Federated login
* Single sign on allows a user to use the same credentials for multiple web applications.
* To experiment with different authentication services, consider AWS Cognito and Google Firebase

# Account Creation and Login
* Two service endpoints for authentication; create an authentication credential and login for future visits
* Web services often have a GetMe endpoint that gives information about the currently authenticated user.
* Create authentication endpoint
* use uuid (universally unique identifier); does a good job at creating a hard to guess, random, unique ID
* uuid creates an authentication token
* Very important to securely store passwords
* we can use bcrypt to securely store passwords.
* Passing authentication tokens to the browser when the login endpoint is called and get it back on subsequent requests. To do this, we use cookies
* cookie-parser package provides middleware for cookies
* When a user is successfully create or logs in, we set the cookie header
* httponly tells the broswer to not allow JavaScript running on the browser to read the cookie
* secure requires HTTPS to be used when sending the cookie back to the server
* sameSite only returns the cookie to the domain that generated it.

# Lecture 3/20/2024
* Automated testing; want to be able to develop faster
* Test driven development is important
* Playwright: does frontend test programming
  * Created by Microsoft; plays really well with VS Code
  * playwright will show up in devDepencies rather than dependencies; doesn't get transferred up to production environment.
  * caniuse.com shows what works on different browsers
 
* Endpoint/backend testing
  * Jest is the most common for this
* npm install jest supertest -D (-D means development only dependency)
* To use jest, you need to decouple index.js from jest
  * Do this by having server.js which can use jest and index.js, but index.js and jest are decoupled
* supertest starts up the server so that jest can run
* 


# UI Testing
* Test driven development is a methodology for accelerating application creation, protecting against regression bugs, and demonstrating correctness
* Web applicaiton UI code is complex to test, and using automated tests is even more difficult.
* Every major broswer behaves differently, viewport size makes a big difference, code executes asynchronously, network disruptions are common, and there is the human factor. There's a lot of factors that make testing hard. But not testing code doesn't work either.
* Playwright: automates testing applications in a browser (frontend)
* Playwright is backed my Microsoft and integrates really well with VSCode
* to install Playwright in your project directory, use NPM to download the Playwright packages, install the browser drivers, configure project, and create a couple example test files
  * npm init playwright@latest
  * Install playwright test extension for VSCode
 
* Testing various devices: BrowserStack
  * Lets you pick from a long list of physical devices that you can run interactively, or use when driving automated tests with Selenium. When you launc a device it connects the browser interface to a physical device hosted in a data center. You can then use the device to reproduce user reported problems, or validate that your implementation works on that specific device.
  * BrowserStack offers free trials to see how startup application would work on a specific device.
 
# Endpoint Testing
* Testing services is usually easier than writing UI tests because it doesn't require a broswer. But it still takes effort to learn to write tests that are effective and efficient
* Jest is one of the top services right now
* to install jest:
  * mkdir testJest
  * cd testJest
  * npm init -y
  * npm install express
  * create a file named server.js and use express to create an application with two endpoints; one to get a store and one to update a store
  * server.js functions like index.js used to and does almost all the same things. We can export app from server.js, import it on index.js, and listen on index.js. This allows us to decouple running our service from testing the service with jest
  * Tests in jest are meant to be human readable.
 
* To install jest:
  * npm install jest supertest -D
  * replace the scripts section of the package.json file with a new command that will run our tests with Jest
    * i.e. "test": "jest" in scripts
  * supertst allows us to make HTTP requests without having to actually send them over the network.
 
* With TDD, you can write tests first and then write code based upon the design represented by thet tests. When the tests pass, you know that your code is complete. 

# WebSocket
* HTTP is based on a client-server architecture, where a client initiates the request and the server responds. This is great for building a global document library connected by hyperlinks, but for other use cases it doesn't work
* Applications for notification, distributed task processing, peer-to-peer communication, or asynchronous events need communication that is initiated by two or more connected devices.
* WebSocket solves these problems
* WebSocket is fully duplexed, meaning that after the initial connection is made from a client, the relationship changes to a peer-to-peer connection where either party can efficiently send data at any time.
* WebSocket connections are still only between two parties, so if you want a conversation between a group of users, the server needs to act as an intermediary.
* JavaScript running on a browser can initiate a WebSocket connection with the browser's WebSocket API by creating a WebSocket object specifying the port you want to communicate on.

# Debugging WebSocket
* Can debug both sides of the WebSocket communication with VSCode to debug the server, and Chrome to debug the client. Chrome's debugger has support specifically for working with WebSocket communication.
* Debugging the server
  * Create a directory
  * npm init -y
  * npm install ws
  * make WebSocket code
  * Set breakpoints and start debugging with F5
 
* Debugging the client:
  * Open chrome debugger by pressing F12
  * Paste   const socket = new WebSocket('ws://localhost:9900');

socket.onmessage = (event) => {
  console.log('received: ', event.data);
};

  * into the debugger console window and press enter to execute it. Exeucting this code will immediately hit the server breakpoint. Take a look at what is going on and then remove the breakpoint from the server
  * Select the Network tab and select the HTTP message that was generated
  * Click Messages tab to view websocket messages
  * Send a message to the server by using socket.send('message')

# Lecture 3/22/2024
* Learn how to use curl/postman
* HTTP is great for making client-to-server requests: client makes response, server gives response
* WebSocket: Proxy messages between clients; sending notifications to client
* Server is the proxy between clients
* HTTP has a built-in request to upgrade the infrastructure. You start from an HTTP client, and then you can upgrade to a WebSocket connection.

* npm install ws will install websocket

const socket = new WebSocket('ws://localhost:9900');
socket.onmessage = (event) => {
console.log('received: ', event.data);
};
socket.send('I am listening');

* Be really careful when taking input from the user that it can't be executed

* Simon websocket
* protocol in websocket called ping and pong that tells the connection to stay alive.

# Lecture 3/25/2024: Security
* React is a different framework from vanilla HTML, CSS, JavaScript
* React will basically completely turn my application on its head
* Brazilian meatpacking JBS ransomware
* Solarwinds APT
* Amazon DDOS attack (distributed denial of service)
* Sony entertainment breach
* VA unencrypted data
* AWS, Yahoo, CNN, Dell DDOS Mafiaboy

## OWASP 10
* Open Worldwide Application Security Project
* Has 10 ten things developers should think about in terms of web development
1. Broken access control
  * Least privilege access violation
* URL bypass control; if you know the URL, you can just get to the right place
* Resource path on url allows access

2. Cryptographic failures
* Transmitting data as clear text
* Not encrypting at rest or transit
* Weak cryptography (Sha1, MD5)
* Misused cryptography (no salt, wrong params)
* Security needs to be a multilayered approach

3. Injection
* User supplied data is not sanitized

4. Insecure Design
* Not aware of best practices
* Unlimited trial accounts
* Customer data not segmented
* Single layer defense

5. Security Misconfiguration
* Development info exposed
* Using default configurations (ex. Routers, leaving default username/password)
* Unnecessary features installed (if you don't need it, get rid of it)
* System not hardened; once it's clean, shrink parameters and everything running as much as possible (ex. letting any IP address access, rather than just your production server)

6. Vulnerable Components
* Unnecessary/unused packages imported
* Untrusted/verified sources
* Out of date software
* Not tracking vulnerabilty bulletins
* Package version not locked

7. ID and Auth Failures
* Credential stuffing (compromised list of passwords)
* Brute force attacks (guess a password)
* Permitting weak passwords
* Weak credential recovery
* Credentials in URL
* Not expiring auth tokens

8. Software Integrity Failures
* Unverified CDN usage (fine if you trust the CDN source, you need to trust though)
* Unverified packages (npm install)
* unverified updates
* Insecure CD/CI platforms
* Your partners are part of your code

9. Logging failure
* Not logging critical requests
* Not monitoring system performance
* Logs not audited, automatic or manual
* Logs not stored centrally
* No real-time response

10. Server Side Request Forgery

* The line of death: the only thing you can trust is the host name (url), but nothing that comes after the .com, .org, etc.

# Lecture 3/27/2024 Security Practice
* Gruyere is similar to juicebox, can go to it through google and play around it
* Juice shop; install it on computer. clone it on your environment.
* There are no secrets in frontend. Gotta be careful with that.

# Security
* Even if you don't think your application is valable enough to require security, it could pose a security problem for your users on other systems.
* Web application security (AppSec) is a subset of cybersecurity that specifically focuses on preventing security vulnerabilities within end-user applications.
* Hacking: process of making a system do something it is not supposed to do
* Exploit: code or input that takes advantage of a programming or configuration flaw
* Attack vector: The method that a hacker employs to penetrate and exploit a system
* Attack surface: The exposed parts of a system that an attacker can access. For example, open ports, service endpoints, or user accounts
* Attack payload: The acctual code, or data, that a hacker delivers to a system in order to exploit it
* Input sanitation: "Cleaning" any input of potentially malicious data
* Black box testing: testing an application without knowledge of the internals of the application
* White box testing: testing an application with knowledge of the source code and internal infrastructure
* Penetration testing: attempting to gain access to, or exploit, a system in ways that are not anticipated by the developers
* Mitigation: the action taken to remove, or reduce, a threat

Attacker motivation:
* Disruption (attempts at extortion, or punish a business that attacker does not agree with)
* Data exfiltration: exploit insider information, sell information to competitors, or leverage the information for additional attacks
* Resource consumption; use resources for other purposes like mining cryptocurrency, gathering consumer information, or attacking other systems

Common hacking techniques
* Injection; when an application interacts with a database on the backend, a progrmamer can use a specialized query to make the database reveal hidden information or even delete the database
* Cross-site-scripting (XSS): make malicious code execute on a different user's browser.
* Denial of service: render a service inaccessible; SQL injection, sending unexpected data, making more requests than a server can handle
* Credential stuffing
* Social engineering

What can I do?
* Sanitize input data; assume it is unsafe
* Logging: create an immutable log of requests that will expose when a system is being exploited
* Traps: create what appears to be valuable information and then trigger alarms when the data is accessed
* Educate: Teach yourself, your users, and everyone your work with to be security-minded
* Reduce attack surfaces: Don't open access anymore than is necessary; ie what network ports are open
* Layered security: don't assume that one safeguard is enough. Create multiple layers of security
* Least required access policy: don't give any one user all credentials necessary to control whole system
* Safeguard credentials
* Public review: Do not rely on obscurity to keep your system safe. Assume that an attacker knows everything about your system and make it difficult for anyone to exploit it

# Lecture 3/29/2024 Web Frameworks
* Purpose of frameworks: simplify common patterns, provide common component, improve performance, increase device coverage
* Frameworks come and go
* React came from meta (instagram)
* Angular came from google
* Jordan Walke: lead architect for creating React

* Core of react: JSX
  * Combining Javacript and HTML
  * Need transpile (translation compile using babel); converts jsx file into js to manipulate the DOM
* In CodePen, you can specify that you want to use a babel preprocessor
* need two react libraries
* A lot of security stuff is built into the frameworks themselves
* React helps us create a one-page react application
* index.html is the only html file

* To create a component, make a function (i.e. Hello) which returns the jsx that you want to be rendered.
* Components need to be uppercase
* can also use classes, but functions are the preferred and supported method
* Properties in react heavily use object destructuring
* Hooks in react; keep tract of state

* Assignment: property to set initial color
* Mouse over to change initial color

# Web Frameworks
* Provide tools for completing common application tasks
* Some frameworks take things beyond the standard technologies and crate new hybrid file formats that combine things like HTML and JavaScript into a single file (i.e. React JSX, Vue SFC, and Svelte files
* React extracts HTML into a JavaScript variant called JSX. JSX is converted into alid HTML and JavaScript using Babel, a preprocessor.
* React.createElement function generates DOM elements and monitors the data they represent for changes. When a change is discovered, React will trigger dependent changes

# Components
* React allows you modularize the functionality of your application
* render function: whatever is returned is inserted into the component HTML element
* functions are React components that can be rendered

Properties:
* React properties allow you to pass information to them in the form of element properties

State:
* A component can have an internal state. Component state is create by calling the React.useState hook function, which returns a variable that contains the current state and a function to update the state.

Class style components are also supported, but react is moving away from that towards functions

# Toolchains:
* As web programming becomes more complex, it becomes necessary to abstract away some of the complexity with a series of tools
* Common functional pieces of a web application toolchain include:
  * Code repository
  * Linter: Removes, or warns, of non-idiomatic code usage
  * Prettier: Formats code according to a shared standard
  * Transpiler: Compiles code into a different format. For example, from JSX to JavaScript, Typescript to JS, etc.
  * Polyfill: Generates backwards compatible code for supporting old browser version that don't support the latest standards
  * Bundler: packages code into bundles for delivery to the browser. This enables combatibility or performance.
  * Minifier: Removes whitespace and renames variables in order to make code smaller and more efficient to deploy
  * Testing: Automated tests at multiple levels to ensure correctness
  * Deployment: automated packaging and delivery of code from dev environment to prod environment
 
* Toolchain we use or React includes GitHub as code repo, Vite for JSX, TS: dev and debugging support, ESBuild: convert ES6 modules and transpiling (Babel underneath), Rollup: bundling and tree shaking, PostCSS: CSS transpiling, simple bash script for deployment

# Vite:
* Common way to configure project is to use CLI initially to set up web app
* CLI saves trouble of configuring toolchain parameters and gets you quickly started with a default application
* Vite bundles code quickly, has good debugging support, allows you to easily support JSX, TypeScript, and different CSS flavors
* To create a new React-based web application using Vite, open console and run the following commands:
  * npm create vite@latest demoVite -- --template react
  * cd demoVite
  * npm install
  * npm run dev
 
* run q to stop Vite from hosting
* Vite creates a few application files
  * index.html: primary page for app, loads all JSX components beginning with main.jsx
  * package.json: what maps npm run dev to actually start up vite
  * package-lock.json
  * vite.config.js: configuration setting for Vite
  * vite.svg: vite logo for uas a favicon and for display in the app
  * main.jsx: entry point for code execution
  * index.css: Css for the entire application
  * App.jsx: JSX for top level application component; displays the logs and implements the click counter
  * App.css: Css for the top level applciation component
  * react.svg: react logo for display in the app
 
 ## Building a production release:
 * When you run npm run dev, you are bundling the code to a temporary directory that the Vite debug HTTP server loads from. When you want to bundle your application so that you can deploy to a production environment, you need to run npm run build. this executes the build script found in package.json and invokes Vite. Vite build transpiles, minifies, and injects the proper JS and then ouputs everything to a deployment-ready version.
 * Deploying a production release:
   * deployment script for React creates a production distribution by calling npm run build and then copying the resulting dist directory to your production server
  
# Router:
* A web framework router provides essential functionality for single-page application.
* With a multiple-webpage application th headers, footers, navigation, and common components must be either duplicated in each HTML page or injected before the server sends the page to the browser.
* Router defines the routes a user can take through the application, and automatically manipulates the DOM to display the appropriate framework components.
* React doesn't have a standard router package. There are many we can choose from, but we will use react-router-dom version 6
* Basic implementation of a BrowserRouter component that encapsulates the entire application and controls the routing action. the Link, or NavLink component captures use navigation events and modifies what is rendered by the Routes component by matching up the to and path attributes. 
