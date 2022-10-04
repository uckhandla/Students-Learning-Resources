/*
const TOKEN = "YOUR_PERSONAL_ACCESS_TOKEN";
const GIST_ID = "YOUR_GIST_ID";
const GIST_FILENAME = "db.json";
*/

const TOKEN = "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";
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

/* 
 * Puts the data you want to store back into the gist
 */
async function setData(data) {
  const req = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      files: {
        [GIST_FILENAME]: {
          content: JSON.stringify(data),
        },
      },
    }),
  });

  return req.json();
}
