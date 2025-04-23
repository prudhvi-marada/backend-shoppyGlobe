import cart from '../models/cartModel.js';
import product from '../models/prodectModel.js';
//Named function to add items in the cart
export const addToCart=async(req,res)=>{
    const userId = req.user.id;
    const { productId, quantity } = req.body;

    const p = await product.findById(productId);
  if (!p) return res.status(404).json({ message: "Product not found" });

  let c = await cart.findOne({ userId });
  if (!c) {
    c = new cart({ userId, items: [{ productId, quantity }] });
  } else {
    const itemIndex = c.items.findIndex(item => item.productId.equals(productId));
    if (itemIndex > -1) {
      c.items[itemIndex].quantity += quantity;
    } else {
      c.items.push({ productId, quantity });
    }
  }
  await c.save();
  res.json(c);
}

// Named function to remove items in the cart
export const removeCartItem = async (req, res) => {
    const userId = req.user.id;
    const { productId } = req.params;
  
    let c = await cart.findOne({ userId });
    if (!c) return res.status(404).json({ message: "Cart not found" });
  
    c.items = c.items.filter(item => !item.productId.equals(productId));
    await c.save();
    res.json(c);
  };


// Named function to update items in the cart
export const updateCartItem = async (req, res) => {
    const userId = req.user.id;
    const { productId } = req.params;
    const { quantity } = req.body;
  
    let c = await cart.findOne({ userId });
    if (!c) return res.status(404).json({ message: "Cart not found" });
  
    const item = c.items.find(item => item.productId.equals(productId));
    if (!item) 
        return res.status(404).json({ message: "Product not in cart" });
  
    item.quantity = quantity;
  await c.save();
  res.json(c);
};


