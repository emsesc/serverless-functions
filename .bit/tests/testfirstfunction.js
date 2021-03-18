let uri = undefined
const fetch = require('node-fetch');

uri = process.env.HTTP_ENDPOINT

if (uri == null) {
    throw new Error("You have not added your function url as a secret!");
}

(async () => {
    const resp = await fetch(uri, {
        method: 'GET'
    });
    var data = await resp.text()
    let test = JSON.stringify(data)
    
    if (test.length < 3) {
        throw new Error("No response... Try again!")
    } else {
        console.log("Yay! 🎉 We got: " + JSON.stringify(data))
    }
})();


