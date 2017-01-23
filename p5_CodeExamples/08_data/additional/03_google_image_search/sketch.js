// A2Z F15
// Daniel Shiffman
// https://github.com/shiffman/A2Z-F15

// For all google APIs go here:
// https://console.developers.google.com
// For "Custom Search" you also need to make a 
// specific CSE "custom search engine" here:
// https://cse.google.com/cse/manage/all

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

function search() {
  var term = input.value();
  // Get this API key from: 
  // https://console.developers.google.com
  var apiKey = "AIzaSyACNm4n5QB1TVHFOAzZg96cVdD3trozg4E";
  var url = "https://www.googleapis.com/customsearch/v1?key=" + apiKey + "&searchType=image" +
            // The number below comes from https://cse.google.com/cse/manage/all
            "&cx=017113430126644414771:wwhvz3sxr2q" + 
            "&q=" + term  + "&num=10&start=1&imgSize=large";

  // Load the data
  loadJSON(url, gotData);
}

// Got the data
function gotData(data) {
  var items = data.items;
  
  // Make a <img src=""> for each image from google
  for (var i = 0; i < items.length; i++) {
    var img = createImg(items[i].link);
    img.size(100, 100);
  }
}