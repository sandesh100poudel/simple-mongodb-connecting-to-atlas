const { getDiffieHellman } = require('crypto');
const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect(
    'mongodb+srv://sandesh:R1iaU56oCgqBw0nM@cluster0.lx4btpo.mongodb.net/?retryWrites=true&w=majority'
).then(() => {
    console.log('Connected to database!')
}).catch((error) => {
    console.log(error)
});

const createProduct = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price
  });
  const result = await createdProduct.save();

  res.json(result);
};

const getProducts = async(req,res,next)=>{
    const products = await Product.find().exec();
    res.json(products);
}

exports.createProduct = createProduct;
exports.getProducts = getProducts;