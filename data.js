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

async function getDataX() {
  const req = await fetch(`https://api.github.com/gists/${GIST_ID}`);
  req.then(async (response) => {
    const data = await response.json();
    return JSON.parse(gist.files[GIST_FILENAME].content);
  });  
}

async function getDataY() {
  fetch('myResource.json').then(function(response) {
    return response.json();
  }).then(function(parsedJson) {
    return parsedJson;
  })
}
