// A2Z F15
// Daniel Shiffman
// https://github.com/shiffman/A2Z-F15

// API documentation
// http://developer.nytimes.com
// Weirdly it seems to work with 'sample-key'
// But you should probably get your own

// Input from user
var input;

function setup() {
  noCanvas();

  // Grab the input and button from HTML
  input = select('#search');
  var button = select('#submit');
  // Attach a callback to button press
  button.mousePressed(search);
}

// Run the API call
function search() {
  var term = input.value();

  // URL for querying the times
  var url = 'http://api.nytimes.com/svc/search/v2/articlesearch.jsonp?'
          + 'callback=svc_search_v2_articlesearch&api-key=sample-key'
          + '&q=' + term;

  // Query the URL, set a callback
  // 'jsonp' is needed for security
  loadJSON(url, gotData, 'jsonp');
}

// Request is completed
function gotData(data) {
  console.log(data);
  // Go through and show some results
  docs = data.response.docs;

  // Iterate through the articles in "docs"
  for (var i = 0; i < docs.length; i++) {

    // Make each headline a link to the article
    var headline = createElement('h3', '');
    var link = createA(docs[i].web_url, docs[i].headline.main);
    link.parent(headline);

    // Make a <p> for "lead paragraph"
    var par = createP(docs[i].lead_paragraph);
  }
}