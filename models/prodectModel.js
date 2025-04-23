import mongoose from 'mongoose';

//product schema to store products in store
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  stock: Number
});

const product = mongoose.model('Product', productSchema);
export default product;
