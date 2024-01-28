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
