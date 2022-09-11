const Product=require('../models/Product')
exports.getAddProduct=(req,res)=>{
    res.render("add-product",{docTitle:"Product Page"})
}
// const products=[]
exports.postAddProduct=(req,res)=>{
    // products.push({title:req.body.title})
    const userProduct=new Product(req.body.title)
    userProduct.save()
    res.redirect('/')
}
exports.getProduct=(req,res)=>{
    const products=Product.fetchProduct()
    res.render('shop',{docTitle:'Shop Page',prods:products})
}
