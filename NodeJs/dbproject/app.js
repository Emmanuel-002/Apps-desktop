//https:www.netlify
const express = require('express')
const bodyParser=require('body-parser')
const product=require('./routes/product.route')
const app = express()
let port = 1234
app.use("/products", product)
app.listen(port, ()=>{
    console.log(`Server is up and running on port ${port}`)
})