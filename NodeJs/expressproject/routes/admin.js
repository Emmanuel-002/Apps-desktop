const path=require('path')
const express=require('express')
const router=express.Router()
const adminController=require('../controllers/product')
// const products=[]
router.get('/add-product',adminController.getAddProduct)
    // res.render("add-product",{docTitle:"Product Page"})
    // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'))
    // res.sendFile('../views/add-product.html')
    // res.send(`<form action='/admin/add-product' method='POST'>
    // <input type='text' name='title' /><button type='submit'>Add Products</button>
    // </form>`)
// })

router.post('/add-product',adminController.postAddProduct)
module.exports = router
// exports.router=router
// exports.products=products