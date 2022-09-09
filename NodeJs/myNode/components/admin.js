const express = require('express');
const admin = express.Router()
admin.get('/add',(req,res)=>{
    res.send(`<form action='/' method='POST'>
    <input type='text' name='title' /><button type='submit'>Add Products</button>
    </form>`)
})
admin.post('/',(req,res)=>{
    res.redirect('/')
})
module.exports = admin