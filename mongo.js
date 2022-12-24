const MongoClient = require('mongodb').MongoClient;
 const url = "mongodb+srv://sandesh:Bishal123@@cluster0.lx4btpo.mongodb.net/products_prod?retryWrites=true&w=majority";
// const url =
// 'mongodb+srv://manu:KyOP1JrHoErqQILt@cluster0-g8eu9.mongodb.net/products_test?retryWrites=true&w=majority';
const createProduct = async (req, res, next) => {
    const newProduct = {
      name: req.body.name,
      price: req.body.price
    };
    const client = new MongoClient(url , { useNewUrlParser: true});
  
    try {
      await client.connect();
      const db = client.db();
      const result = db.collection('products').insertOne(newProduct);
    } catch (error) {
      return res.json({message: 'Could not store data.'});
    };
    client.close();
  
    res.json(newProduct);
  };
  

exports.createProduct = createProduct;