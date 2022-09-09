// const express=require('express')
// const app=express()
// const shopRouter=require('./components/shop')
// const adminRouter=require('./components/admin')
// app.use(adminRouter)
// app.use(shopRouter)

// const http=require('http')
// const url =require('url')
// http.createServer(function (req, res){
//     res.writeHead(200, {'Content-Type':'text/html'})
//     res.write('Title:'+'\n')
//     var q = url.parse(req.url,true).query
//     var txt = q.year + ' ' + q.month + q.hostname
//     res.end(txt)
// }).listen(3000)

const http=require('http')
const url=require('url')
const fs=require('fs')

http.createServer((req,res)=>{
    fs.readFile('index.html', function(err=false, data) {
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'})
            res.write('error')
        }  
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
})
}).listen(3000)