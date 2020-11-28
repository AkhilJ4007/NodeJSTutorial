const fs = require('fs');

    const requestHandler = (req,res) => {

        const url = req.url
        const method = req.method

        if(req.url === "/"){
    
            res.setHeader('Content-Type','text/html')
            res.write("<html>")
            res.write("<form action = '/message' method = 'POST'><input type = 'text' name = 'submitMessage'><button>Submit</button></form>")
            res.write("<html/>")
            return res.end()
        
            }
        
            if(req.url === "/message" && req.method === "POST"){
                const body = [];
                req.on('data',(dataChunk) => {
                    console.log(dataChunk)
                    body.push(dataChunk)
                })
            return req.on('end',() => {
                    const parsedBody = Buffer.concat(body).toString()
                    const message = parsedBody.split('=')[1]
                    fs.writeFile('message.txt',message,(err) => {
                        res.writeHead(302,{ 'Location': '/' })
                        return res.end()
                    })
                    
                })
                
            }
        
            console.log(req.url,req.method,req.headers)
            res.setHeader('Content-Type','text/html')
            res.write("<html>")
            res.write("<head><title>My first node js web page</title></head>")
            res.write("<body><div>HELOOOOOOO</div></body>")
            res.write("<html/>")
            res.end()


    }

    module.exports = requestHandler

