# How To Write Markdown: Notes

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
