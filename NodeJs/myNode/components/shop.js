const express = require('express');
const shop = express.Router()
shop.get('/',(req,res)=>{
    res.send('<h1>Hi user</h1>')
})
// home.post('/',(req,res)=>{
//     res.redirect('/')
// })
module.exports = shop