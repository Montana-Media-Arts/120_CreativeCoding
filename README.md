# MART 191 - Creative Coding
## Fall 2016

# SYLLABUS

### Professor Michael Musick
Email: 


Phone: N/A

## COURSE OVERVIEW
The goal for this course is to begin a journey in which the creative and technical possibilities of the computer becomes an tool in your palate. The goal for this tool, or rather set of tools, is for them to become an extension of you, something you think through, express yourself through, and can contribute to the world through. Ultimately, this course is designed to offer you a deeper understanding of the essential possibilities of computation. The course focuses on the fundamentals of programming the computer (variables, conditionals, iteration, functions, and objects) while also touching on a few advanced topics, and relating this all back to the creative and expressive possibilities of media art. The JavaScript-based 'p5.js' programming framework will be utilized within this class. The course will conclude, with your design, development, and implementation of a final project of your choosing.


## Listserv
- [Sign up for the Creative Coding google group (MAKE THIS GROUP)](https://groups.google.com/)

## p5.js
- We will be using [p5.js](http://www.p5js.org/), a JavaScript framework.  Start by [downloading the p5.js editor](http://p5js.org/download/#editor).


## Homework Wiki
- [Homework](https://github.com/ITPNYU/ICM-2015/wiki/Homework-Roopa-Tuesday)


## Videos
- [Kadenze course](https://www.kadenze.com/courses/introduction-to-programming-for-the-visual-arts-with-p5-js/info)
- [Shiffman Vimeo channel](https://vimeo.com/channels/learningp5js/) -- no ads
- [Shiffman Youtube playlist](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA) -- has ads

## Books (optional)
- [Make: Getting Started with p5.js: Making Interactive Graphics in JavaScript and Processing](http://amzn.to/1PmztVt) is probably your best bet for now if you are looking for a book.
- If you are interested in some supplemental reading on HTML and CSS, The [HTML & CSS book](http://www.htmlandcssbook.com/) is a nice one.

## Extra Help 
- Office Hours; 

## Resources
- [p5.js reference](http://p5js.org/reference)
* [p5.js forum](http://forum.processing.org/two/)
* [p5.js tutorials](http://p5js.org/tutorials/)
* [Getting Started with p5.js](http://www.amazon.com/Make-Interactive-Graphics-JavaScript-Processing/dp/1457186772) - O'Reilly book
* [Intro to Visual Programming with p5.js](https://www.kadenze.com/courses/introduction-to-programming-for-the-visual-arts-with-p5-js) - online video tutorials (free with signup)




### 1 -- [Introduction and Drawing](https://github.com/ITPNYU/ICM-2015/raw/master/01_drawing/01_drawing.zip)
* What is computational media?
  * What is programming?
  * How can I apply programming to _____________?
  * As a ____________, why would I want or need to write software?
  * [Example projects](https://github.com/ITPNYU/ICM-2015/wiki/Projects).
* Programming language discussion
  * General discussion of programming languages
  * History of creative coding frameworks
      * Processing and p5.js (and what's processing.js?): [What is p5.js video](https://vimeo.com/channels/learningp5js/137979313)
      * openframeworks, cinder
      * max/msp dataflow programming
      * How does arduino fit in?
* p5.js in the context of the browser
  * Landscape of HTML, CSS, and JavaScript
  * Other JS frameworks
  * Server-side vs. client-side
  * What is the difference between p5 and JavaScript?
* Participating in an open-source community
  * What are git and github?
  * When should you post to a forum vs. file a github issue?
  * Who makes these things?
  * [p5.js working group mailing list](http://groups.google.com/forum/#!forum/p5xjs-working-group)
* Getting started, your first program
  * [Download Examples](https://github.com/ITPNYU/ICM-2015/raw/master/01_drawing/01_drawing.zip)
  * Drawing with numbers: [video tutorial](https://vimeo.com/channels/learningp5js/137979314)
  * Shape and color functions: [video tutorial](https://vimeo.com/channels/learningp5js/137979312)
  * `setup()` and `draw()`
  * Downloading p5.js
   * Start by [downloading the p5.js editor](http://p5js.org/download/#editor).
  * [p5.js reference](http://p5js.org/reference)
* [Uploading your sketch](https://github.com/ITPNYU/ICM-2015/wiki/SFTP-Tutorial)
* <a id="optional-1">Optional viewing / reading:</a>
  * Casey Reas [Eyeo 2012 talk](https://vimeo.com/45851523) on Chance Operations
  * [Introductory p5.js videos](https://vimeo.com/channels/learningp5js/)
  * [FORM+CODE: Introduction and What is Code?](http://formandcode.com) 
  * [As We May Think](http://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/), Vannevar Bush
  * [Long Live the Web](http://jblomo.github.io/webarch253/slides/Long_Live_the_Web.pdf), Tim Berners-Lee

### 2 -- [Animation](https://github.com/ITPNYU/ICM-2015/raw/master/02_animation/02_animation.zip)
- Program flow (what's a function?)
  - Setup, draw, and other events
  - Variation: mouseX and mouseY
  - [video tutorial](https://vimeo.com/channels/learningp5js/138327548)
- More about variables
  - make your own variables (numbers and strings), [video tutorial](https://vimeo.com/channels/learningp5js/138331676)
  - JS objects (variables inside variables), [video tutorial](https://vimeo.com/channels/learningp5js/138327558)
- [random()](http://p5js.org/reference/#/p5/random), [video tutorial](https://vimeo.com/channels/learningp5js/138327559)
- [map()](http://p5js.org/reference/#/p5/map), [video tutorial](https://vimeo.com/channels/learningp5js/138331801)
- [Simple loading and displaying image](https://github.com/ITPNYU/ICM-2015/blob/master/02_animation/02_09_images/sketch.js)
- [Download all examples](https://github.com/ITPNYU/ICM-2015/raw/master/02_animation/02_animation.zip)


### 3 -- [Interaction](https://github.com/ITPNYU/ICM-2015/raw/master/03_interaction/03_interaction.zip)
- Conditional Statements
    - Boolean expressions
    - if statement
    - relational operators
    - [video tutorial](https://vimeo.com/channels/learningp5js/138935676)
    - Case study, bouncing ball: [video tutorial](https://vimeo.com/channels/learningp5js/138935675)
    - else, else if, and, or [video tutorial](https://vimeo.com/channels/learningp5js/138935678)
    - buttons, rollovers, switches [video tutorial](https://vimeo.com/channels/learningp5js/138935677)
- Loops (while and for)
    - while and for [video tutorial](https://vimeo.com/channels/learningp5js/139013336)
    - nested loops [video tutorial](https://vimeo.com/channels/learningp5js/139013372)
- [Download all examples](https://github.com/ITPNYU/ICM-2015/raw/master/03_interaction/03_interaction.zip)

### 4 -- [Functions: the basics](https://github.com/ITPNYU/ICM-2015/raw/master/04_functions/04_functions.zip)
- [Download Examples](https://github.com/ITPNYU/ICM-2015/raw/master/04_functions/04_functions.zip)
- Calling vs. defining
- Modularity: [video](https://vimeo.com/channels/learningp5js/139587733)
- Arguments and parameters
- Re-usability: [video](https://vimeo.com/channels/learningp5js/139587732)
- Return types: [video](https://vimeo.com/channels/learningp5js/139587730)
- Recursion
- Functions inside objects: [video](https://vimeo.com/channels/learningp5js/139587731)
- Optional Readings:
  - [Work of Art in the Age of Mechanical Reproduction](http://www.berk-edu.com/VisualStudies/readingList/06b_benjamin-work%20of%20art%20in%20the%20age%20of%20mechanical%20reproduction.pdf), Walter Benjamin
- Homework: TBA (but something like use a function to draw a design different ways, multiple times.  Make a previous sketch modular.)

### 5 -- [Objects and Arrays](https://github.com/ITPNYU/ICM-2015/raw/master/05_objects_arrays/05_objects_arrays.zip)
* [download examples](https://github.com/ITPNYU/ICM-2015/raw/master/05_objects_arrays/05_objects_arrays.zip)
* Review object literals:
  * properties - name/value pairs
  * functions inside objects
  * `this` keyword
* What is an array? [video tutorial 6.1](https://vimeo.com/141211396)
  * declaring, intializing
  * numeric indices
  * arrays and for loops: [video tutorial 6.2](https://vimeo.com/141211394)
  * `length` property
* An array of objects! [video tutorial 6.3](https://vimeo.com/141211395)
* Constructor function! [video tutorial 6.4](https://vimeo.com/141211393)
* Adding and deleting from an array, `push()` and `splice()` [video tutorial. 6.5](https://vimeo.com/141211392), [video tutorial 6.8](https://vimeo.com/141919523)
* Multiple JS files [video tutorial 6.6](https://vimeo.com/141919522)
* Clicking on objects [video tutorial 6.7](https://vimeo.com/141919520)
* Checking objects intersecting with other objects [video tutorial 6.9](), [video tutorial 6.10](https://vimeo.com/141919521)
* loading images for objects [video tutorial 6.11](https://vimeo.com/141919525)

### 6 -- Synthesis -- **October 2nd, 11am - 2pm**
- **Meet in the ITP Lounge**
- **Bring your Arduino**
- **[All details here](https://github.com/ITPNYU/ICM-2015/wiki/Synthesis)**
- Serial input with a callback workshop
- "One button experience" exercise

### 7 -- [DOM: events and callback function](https://github.com/ITPNYU/ICM-2015/raw/master/07_dom/07_dom.zip)
- [Download all examples](https://github.com/ITPNYU/ICM-2015/raw/master/07_dom/07_dom.zip)
- Review events -- mousePressed, keyPressed
- [Tutorial: Beyond the Canvas, using p5.dom](https://github.com/processing/p5.js/wiki/Beyond-the-canvas)
- [Tutorial: Intro to HTML/CSS basics](https://github.com/processing/p5.js/wiki/Intro-to-HTML-and-CSS#css)
- DOM elements - [p5.dom reference](http://p5js.org/reference/#/libraries/p5.dom)
    - `createP()`
    - `createButton()` 
    - `createSlider()`
- Callbacks
    - `button.mousePressed(callback);` 
- `style()` -- low key intro to CSS
- [CSS Reference](http://www.blooberry.com/indexdot/css/propindex/all.htm)


### 8 -- [Data](https://github.com/ITPNYU/ICM-2015/raw/master/08_data/08_data.zip)
- [Download all examples](https://github.com/ITPNYU/ICM-2015/raw/master/08_data/08_data.zip)
- [Tutorial: loading external data with p5.js](https://github.com/processing/p5.js/wiki/Loading-external-files:-AJAX,-XML,-JSON)
- [Tutorial: more about data and APIs](http://shiffman.github.io/A2Z-F15/week4/notes.html)
- JSON and APIs (and more on callbacks!)
- Word Counting
- Tabular data
- Optional Reading:
  - [Art and the API](http://blog.blprnt.com/blog/blprnt/art-and-the-api), Jer Thorp 
  - [The Anxieties of Big Data](http://thenewinquiry.com/essays/the-anxieties-of-big-data/), Kate Crawford

### 9 -- [Video and Sound](https://github.com/ITPNYU/ICM-2015/raw/master/09_video_sound/09_video_sound.zip)
- [Download all examples](https://github.com/ITPNYU/ICM-2015/raw/master/09_video_sound/09_video_sound.zip)
- [p5.sound reference](http://p5js.org/reference/#/libraries/p5.sound)
- [Video/capture: p5.MediaElement reference](http://p5js.org/reference/#/p5.MediaElement)
- Sound
- Live capture
- Movie playback
- Video Assignment

### 10 -- [Mobile](https://github.com/ITPNYU/ICM-2015/raw/master/10_mobile/10_mobile.zip)
- [Download all examples](https://github.com/ITPNYU/ICM-2015/raw/master/10_mobile/10_mobile.zip)
- Workflow and process, get a previous sketch running on a device
- Touch interaction
- Sensors
- [More mobile examples from Jia](https://github.com/OhJia/p5MobileWebExamples)
- [p5 mobile workflows by Jia](https://github.com/OhJia/p5Mobile/wiki/Workflows)
- [Using the viewport meta tag to control layout on mobile browsers](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag)
- [Hammer.js](http://hammerjs.github.io/)
- Homework: Prepare a final project proposal.  See you section's wiki.

### 11 -- Other Topics + Final Project Proposals
- **See your individual section's proposal schedule on your wiki**
- Possible topics
   - more on pixels
   - more on data
   - setTimeout, setInterval
   - WebGL - [tutorial](https://github.com/processing/p5.js/wiki/Getting-started-with-WebGL-in-p5)
   
### 12 -- Beyond p5.js + Final Project Proposals
- **See your individual section's proposal schedule on your wiki**
- Life beyond p5.js
  - Take ICM into the spring semester courses 
  - Other JS libraries?
  - Coding outside the p5 IDE? ([local server tutorial](https://github.com/processing/p5.js/wiki/Local-server))
  - [local server tutorial](https://github.com/lmccart/itp-creative-js/wiki/SimpleHTTPServer)
  - [More HTML/CSS](https://github.com/processing/p5.js/wiki/Intro-to-HTML-and-CSS)
  - What is server side programming for?
  - [Processing](http://processing.org)
  - Open source
    - How do artists make and adapt tools for themselves and their communities, like Processing, p5.js, openFrameworks, etc? 
  - How do you  get involved with this?

### 13 -- One on one speed user testing / feedback
- This week you will "user test" your project with fellow classmates. You must have some implementation that you can test completed by this time.  User testing can mean different things for different projects. For a game, it can mean that the user tries to play it. For an art piece, it could mean showing it to a classmate and asking for them to say what they think it is about or how it made them feel. We'll show projects in a "one on one" / round robin / speed dating-style session. 5 minutes then switch. You cannot not explain your project, just show and let the user try it and give you feedback. Then you can answer questions.  User testing schedule will be provided on a wiki.

### 14 -- Final Project Presentations
- Please add your link to your final project documentation on your section's wiki.


# Policies

##Evaluation

Grades will be determined according to the following breakdown:
* Regular Assignments 40%
* Participation and Attendance 40%
* Final Project 20%

Please see ITP's statement on [Pass/Fail](http://help.itp.nyu.edu/academic-policies/pass-fail) which states that a "Pass" is equivalent to an "A" or a "B" while anything less would be considered a "Fail".

We will have weekly assignments that are relevant to material from the previous class. These assignments are required and you should be prepared to show/talk about them in class. It is expected that everyone in the class will create and maintain a blog for their assignments.

Attendance is mandatory. Please inform your teacher via email if you are going to miss a class. Two unexcused absences is cause for failing the class. (An unexcused lateness of 10 minutes or more is equivalent to 1/2 an absence.)

This class will be participatory, you are expected to participate in discussions and give feedback to other students both in class and participate with their projects. This (along with attendance) is 40% of your grade.

Class will culminate with final projects. You are expected to push your abilities to produce something that utilizes what you have learned in the class that is useful in some manner to yourself or the world. This will comprise 20% of your grade.


Mantras By James
----------------
- "Practice is the best of all instructors." - computation requires practice 
- "An agreeable companion on a journey is as good as a carriage." - look to your classmates for help too 
- "While we stop to think, we often miss our opportunity." - sometimes you need to take a leap of faith 
- "When two do the same thing, it is not the same thing after all." - encourage students with similar ideas 
- "The bow too tensely strung is easily broken." - don't get too stressed out 
- All of these are from Plubius Syrus.(42 B.C.) 



## GRADING PROCEDURE

Grades will be based primarily on the student’s ability to:
1. Demonstrate an understanding of the specific characteristics and integrative capabilities of the assigned topic in your own words and code.
2. Articulate a clear and concise perspective. Cutting and pasting or copying word for word off the Internet will result in loss of points.
3. Present an organized file/program, as well as blog entry; including proper and punctual delivery of the assignment files.
4. Demonstrate creativity beyond the expected technical requirements.


IMPORTANT: Assignments handed in after the due date and time will have points deducted for lateness. This will be in addition to any points deducted for content. Those that are uploaded late but within one week of the due date will lose 1 point for lateness.  For those uploaded after that, the number of deducted points will be at the discretion of the faculty. 


There will be a total of 100 points based on the following formula:

- Assignments (Code File, and Response) = 80%
- Final Project = 20%  

     
A   95-100
     
A-  90-94
     
B+  86-89
     
B   83-85
     
B-  80-82
    
C+  76-79
     
C   73-75
     
C-  70-72
     
D   60-69
     
F   0-59


## Academic Misconduct and the Student Conduct Code

All students must practice academic honesty. Academic misconduct is subject to an academic penalty by the course instructor and/or disciplinary sanction by the University. All students need to be familiar with the Student Conduct Code. The Code is available online at http://www.umt.edu/vpsa/policies/student_conduct.php


## Attribution
This course is modeled off of NYU ITP's Intro to Computational Media Course. https://github.com/ITPNYU/ICM-2015.
