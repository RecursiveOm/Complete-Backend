const ImageKit = require("imagekit")


const imageKit = new ImageKit({


    
    publicKey:"public_ItgtcNmZB/7HiAQg4sCdpIj9x5Q=",
    privateKey:"private_qWsrEQbM5Jh8gYQ1261P93UvC4Q=",

    urlEndpoint:"https://ik.imagekit.io/n5m18ahgf"

})



async function uploadFile(buffer){


    const result = await imageKit.upload({

        file:buffer,

        fileName:"image.jpg"

    })


    return result

}


module.exports = uploadFile