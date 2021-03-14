let uri = undefined

try { uri = process.env.HTTP_ENDPOINT }
catch(e) {
    throw new Error("You have not added your function url as a secret!");
}

async function getPage() {
    const resp = await fetch(, {
        method: 'GET'
    });
    var data = await.json()
    return data
}

var data = await getPage()

if(data == null){
    throw new Error("No response... try again!")
}

console.log("Yay! 🎉 Received: ${data}")
