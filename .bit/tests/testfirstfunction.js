let uri = undefined
let data = undefined

try { uri = process.env.HTTP_ENDPOINT }
catch(e) {
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
