let uri = undefined
const fetch = require('node-fetch');
const fs = require('fs');
const FormData = require('form-data');

uri = process.env.FUNCTION_URL

if (uri == null) {
    throw new Error("You have not added your function url as a secret!");
}

(async () => {
    fs.readFile(`${__dirname}/testimage.jpg`, async function(err, data) {
        console.log(data)
        let formData = new FormData()
        formData.append('file', data)
        const resp = await fetch(uri, {
            method: 'POST',
            body: formData,
             headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
              },        
        });
        var result = await resp.text()
        let test = JSON.stringify(result)

        if (test.length < 3) {
            console.log("No response... Try again!")
            process.exit(1)
        } else {
            console.log("Yay! 🎉 We got: " + test)
    }
  })
})();

// test
