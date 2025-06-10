const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect('mongodb+srv://<username>:<password>@cluster.mongodb.net/carti', {
  useNewUrlParser: true, useUnifiedTopology: true
});


const Product = mongoose.model('Product', {
  name: String,
  price: Number,
  tags: [String],
  views: Number,
  sales: Number
});


app.get('/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});


app.post('/products', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json({ success: true });
});

app.listen(3000, () => console.log('API hazır: http://localhost:3000'));