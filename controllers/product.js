import product from '../models/prodectModel.js'; 

//Named export function to get all products in the database
export const getProducts=async(req,res)=>{
  try{
    const p=await product.find();
    res.json(p);
  }catch(e){
    res.status(500).ison({message: "error while fetching",error:e.message});
  }
};

//Named export function to add new product into the store
export const addProduct = async (req, res) => {
  try {
    const p = new product(req.body);
    await p.save();
    res.status(201).json(p);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// named export function to find product by id
export const findProductById = async (req, res) => {
    const { id } = req.params;
    try {
      const p = await product.findById(id);
      if (!p) return res.status(404).json({ message: "Product not found" });
      res.json(p);
    } catch (e) {
      res.status(500).json({ message: "Error while fetching", error: e.message });
    }
  }; 
