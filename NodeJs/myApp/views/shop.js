const express = require('express')
const app =express()
app.get('/',(req,res)=>{
    res.send('<h1>Hello user</h1>')
    console.log(req.body)
})