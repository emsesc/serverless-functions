let uri = undefined
let data = undefined
const fetch = require('node-fetch');

uri = process.env.HTTP_ENDPOINT
if (uri == null) {
    throw new Error("You have not added your function url as a secret!");
}

async function getPage() {
    const resp = await fetch(uri, {
        method: 'GET'
    });
    
    var data = await resp.json()
    
    if(data == null){
        throw new Error("No response... try again!")
    }

    console.log("Yay! 🎉 Received: ${data}")
}

getPage();
