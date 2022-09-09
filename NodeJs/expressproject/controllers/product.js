exports.getAddProduct=(req,res)=>{
    res.render("add-product",{docTitle:"Product Page"})
}
const products=[]
exports.postAddProduct=(req,res)=>{
    products.push({title:req.body.title})
    res.redirect('/')
}
exports.getProduct=(req,res)=>{
    res.render('shop',{docTitle:'Shop Page',prods:products})
}
