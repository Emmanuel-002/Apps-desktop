// npm install pug
//const http = require('http')
const express=require('express')
const bodyParser=require('body-parser')
const path=require('path')
const adminRouter=require('./routes/admin')
const shopRouter=require('./routes/shop')
const app=express();
app.set('view engine', 'pug')
app.set('views', 'views')//first views keyword, the second is userdefined

app.use(bodyParser.urlencoded({extended:false})) //having installed body-parser
app.use(express.static(path.join(__dirname, 'public')))//to add css
//more static folders can come here
app.use("/admin",adminRouter) //sequence is important
app.use(shopRouter)

//default page
app.use('/', (req,res)=>{
    res.status(404).render("404",{docTitle:"Page not found"})
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
    // res.status(404).send('<h1>Page not found</h1>')
})

app.listen(4000)