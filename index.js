const http = require("http")

const server = http.createServer((req, res)=>{
    console.log(res.end("Hello From the Other Side..."))
})

server.listen(3000, "127.0.0.1", ()=>{
    console.log("Listening to port 3000")
})