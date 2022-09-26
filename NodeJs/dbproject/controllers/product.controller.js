const { create } = require('../models/product.models')
const Products = require('../models/product.models')
exports.test = (req, res)=>{
    res.send("Reached test controller")
}
exports.product_create = (req,res,next) =>{
let user_product = new Products({
name: req.body.name,
price: req.body.price
})
user_product.save(function(err){
if (err){
return next(err)
}
res.send('Product added')
})
}

// create
exports.product_details = (req,res,next) =>{
Products.findById(req.params.id,function(err,product){
if(err) return next(err)
res.send(product)
})
}
// update
exports.product_update=(req,res,next)=>{
Products.findByIdAndUpdate(req.params.id,{$set:req.body},function(err){
if(err) return next(err)
res.send('product updated')
})//describes what is to be updated -{$set:{name:req.body.name}}

}

//delete

exports.product_delete=(req,res,next)=>{
Products.findByIdAndRemove(req.params.id,function(err){
if(err) return next(err);
res.send('Product deleted');
})
}