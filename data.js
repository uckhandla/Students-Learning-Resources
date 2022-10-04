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



