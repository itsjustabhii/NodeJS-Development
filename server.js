const http = require("http")

const server = http.createServer(function (req,res) {

    if(req.url === "/getSecretData"){
        res.end("There is no secret data")
    }
    res.end("Hello World")
}) // returns an server instance

server.listen(6666)