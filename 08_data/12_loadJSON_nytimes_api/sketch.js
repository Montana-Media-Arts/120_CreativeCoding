// http://developer.nytimes.com

function setup() {
  noCanvas();
  noLoop();
  noStroke();
  fill(0);
  var url = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=obama&api-key=sample-key";
  loadJSON(url, showSnippets);
}


function showSnippets(data) {
  console.log(data);
  var docs = data.response.docs;
  for (var i=0; i<docs.length; i++) {
    createP(docs[i].snippet);
  }
}
