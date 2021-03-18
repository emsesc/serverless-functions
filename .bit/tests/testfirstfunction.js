let uri = undefined
let data = undefined
const fetch = require('node-fetch');

uri = process.env.HTTP_ENDPOINT
if (uri == null) {
    throw new Error("You have not added your function url as a secret!");
}

fetch(uri)
  .then(response => response.json())
  .then(data => console.log(data))

