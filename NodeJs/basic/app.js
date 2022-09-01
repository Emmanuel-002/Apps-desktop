// console.log('hello from nodejs')
// const fs = require('fs');
// fs.writeFileSync('hello.txt', 'this is file message');
const http=require('http')
const fs = require('fs');
// function requestListener(req,res){
//     console.log(req.url,req.method,req.headers)
//     process.exit();
// }
const server = http.createServer((req, res) => {
    if(req.url==='/'){
    res.write('<html>')
        res.write('<head><title>Message</title></head>')
        res.write("<body><form method='POST' action='/message'>")
        res.write("<input type='text' name='message' />")
        res.write("<button type='submit'>Submit</button>")
        res.write('</form></body></html>')
    return res.end()
    }
    if(req.url==='/message' && req.method==='POST'){
        fs.writeFileSync('message.txt', 'dummy text')
        res.writeHead(302,{Location:'/'})
        return res.end()
    }

    res.setHeader('Content-Type','text/html');
    res.write('<html>')
        res.write('<head><title>Example</title></head>')
        res.write('<body><h1>Hello user</h1></body>')
    res.write('</html>')
    res.end()
})
server.listen(3000);