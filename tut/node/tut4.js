const http=require('http')
const fs=require('fs')

const html=fs.readFileSync('data.html','utf-8')
const server=http.createServer((req,res)=>{
res.writeHead(200,{"content-type":"text/html"})
res.end(html)
})

server.listen(80,"127.0.0.1",()=>{
    console.log("server on 80 ...")
})