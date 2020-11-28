const fs = require("fs");

const route = (req,res) => {

    if(req.url === '/')
    {
        res.setHeader("Content-Type","text/html")
        res.write("<html>")
        res.write("<head><title>Test</title></head>")
        res.write("<body>")
        res.write("<div>YOOOOO</div>")
        res.write('<form action="/create-user" method="POST">')
        res.write("<input type='text' name='fname'>")
        res.write('<button type="submit">Submit</button>')
        res.write("</form>")
        res.write("</body>")
        res.write("</html>")
        return res.end()

    }

    if(req.url === "/create-user" && req.method === "POST"){

        const body = []


        req.on('data',(dataChunk)=>{

            body.push(dataChunk)
            

        })

    req.on('end',()=>{
            const bufferedData = Buffer.concat(body).toString()

            fs.writeFile("userInfo.txt",bufferedData,(err) => {
                
            })
        })

        res.writeHead(302,{ 'Location': '/' })
        
        return res.end()

    }

    if(req.url === '/users')
    {
        res.setHeader("Content-Type","text/html")
        res.write("<html>")
        res.write("<head><title>Test</title></head>")
        res.write("<body>")
        res.write("<div>")
        res.write("<ul>")
        res.write("<ul>")
        res.write("<li>")
        res.write("Akhil")
        res.write("</li>")
        res.write("<li>")
        res.write("sdfdsf")
        res.write("</li>")
        res.write("<li>")
        res.write("sdfds")
        res.write("</li>")
        res.write("</ul>")
        res.write("</ul>")
        res.write("</div>")
        res.write("</body>")
        res.write("</html>")
        return res.end()

    }




}

module.exports = route

