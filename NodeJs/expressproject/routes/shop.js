const path=require('path')
const express=require('express')
const router=express.Router()
const adminRoutes=require('./admin')
const adminController=require('../controllers/product')
router.get('/',adminController.getProduct) //this line connects to the pug file
    // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'))
    // res.send('<h1>Hi user</h1>')
// })
module.exports=router