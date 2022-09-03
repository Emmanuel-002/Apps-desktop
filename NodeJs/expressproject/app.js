//const http = require('http')
const express=require('express')
const bodyParser=require('body-parser')
const adminRouter=require('./routes/admin')
const shopRouter=require('./routes/shop')
const app=express();
app.use(bodyParser.urlencoded({extended:false})) //having installed body-parser
app.use(adminRouter) //sequence is important 
app.use(shopRouter)

// app.use((req,res,next)=>{
//     console.log('first middleware')
//     next();
// })

// app.use("/add-product", (req,res,next)=>{
//     res.send(`<form action='/product' method='POST'>
//     <input type='text' name='title' /><button type='submit'>Add Products</button>
//     </form>`)
// })
// app.use("/product",(req,res)=>{
//     console.log(req.body)
//     res.redirect("/")
// })

// app.use("/add-product", (req,res,next)=>{
//     res.send('<h1>Product page</h1>')
// })

// app.use('/',(req,res)=>{
//     res.send("<h1>First route</h1>")
// })



// app.use((req,res,next)=>{
//     console.log('second middleware')
//     res.send('<h1>hi user</h1>')
// })
app.listen(3000)




// const server=http.createServer(app)
// server.listen(3000, () => {
// console.log('server started')
// })