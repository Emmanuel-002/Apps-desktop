const express = require('express')
const router = express.Router()
//controller
const product_controller=require('../controllers/product.controller')

router.get("/test", product_controller.test)
module.exports=router