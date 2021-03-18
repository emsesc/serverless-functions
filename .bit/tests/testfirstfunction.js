let uri = undefined
let data = undefined
const fetch = require('node-fetch');

uri = process.env.HTTP_ENDPOINT
if (uri == null) {
    throw new Error("You have not added your function url as a secret!");
}

try {
    fetch(uri)
    .then(response => console.log("Success 🎉! We got: " + response.json()))
} catch (e) {
    throw new Error("Try again, we didn't get a response.")
}


