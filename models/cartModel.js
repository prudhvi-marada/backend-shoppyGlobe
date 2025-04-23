import mongoose from 'mongoose';

//cart model to store items in the cart
const cartSchema = new mongoose.Schema({
  userId:
    {   type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
  items: 
    [{
        productId: 
            {   type: mongoose.Schema.Types.ObjectId, 
                ref: 'Product' 
            },
        quantity: Number
    }]
});

const cart= mongoose.model('Cart', cartSchema);
export default cart;