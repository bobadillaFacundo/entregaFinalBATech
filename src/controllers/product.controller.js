
import { getProductById,getAllProducts,saveProduct,deleteProduct } from '../models/product.model.js' 

const getProductsController = async (req, res) => {
try {
   const products = await getAllProducts() 
   res.status(200).json(products) 
} catch (error) {
    res.status(500).json({ message: 'Error fetching products', error }) 
  }   
}
const getProductByIdController = async (req, res) => {
  try {
    const product = await getProductById(req.params.id) 
    if (product) {
      res.status(200).json(product) 
    } else {
      res.status(404).json({ message: 'Product not found' }) 
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product', error }) 
  }
}
const createProductController = async (req, res) => {
  try {
    const newProduct = req.body 
    await saveProduct(newProduct) 
    res.status(201).json({ message: 'Product created successfully' }) 
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error }) 
  }
}
const deleteProductController = async (req, res) => {
  try {
    await deleteProduct(req.params.id) 
    res.status(204).send("Product deleted successfully") 
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error }) 
  }
}


export default { getProductsController, getProductByIdController, createProductController, deleteProductController } 
