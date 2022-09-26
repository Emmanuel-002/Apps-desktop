//https:www.netlify
const express = require('express')
const bodyParser=require('body-parser')
const product=require('./routes/product.route')
const app = express()
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/fsd3db')
.then((result) => console.log(result.Connection))
.catch((err)=>console.log(err))
//mongodb://someuser:pwd

let port = 1234
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use("/products", product)
app.listen(port, ()=>{
    console.log(`Server is up and running on port ${port}`)
})