const http = require("http")

const server = http.createServer((req,res)=>{
if(req.url === "/"){
    res.end("hello to our home")
    return
}if(req.url ==="/about"){
    res.end("hello to our about")
    return

}else{
    res.end(`error`)
}



})

server.listen(5000)