const ImageKit = require("imagekit")
require("dotenv").config()


const imageKit = new ImageKit({


    
    publicKey:process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint:process.env.IMAGEKIT_URL_ENDPOINT

})



async function uploadFile(buffer){


    const result = await imageKit.upload({

        file:buffer.toString("base64"),

        fileName:"image.jpg"

    })


    return result

}


module.exports = uploadFile