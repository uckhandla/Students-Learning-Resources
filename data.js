const GIST_ID = "e51da4a2753940578e0bb21412bc1895";
const GIST_FILENAME = "db.json";

/* 
 * Reads the JSON file inside of the gist
 */
async function getData() {
  const req = await fetch(`https://api.github.com/gists/${GIST_ID}`);
  const gist = await req.json();
  return JSON.parse(gist.files[GIST_FILENAME].content);
}

async function getDataY() {
  fetch(`https://api.github.com/gists/${GIST_ID}`).then(function(response) {
    return response.json();
  }).then(function(parsedJson) {
    return parsedJson;
  })
}

async function getDataZ() {
  fetch('https://gist.githubusercontent.com/uckhandla/e51da4a2753940578e0bb21412bc1895/raw/398ee46bf1273084f283f199dfa206f278a1385b/db.json').then(function(response) {
    return response.json();
  }).then(function(parsedJson) {
    return parsedJson;
  })
}



