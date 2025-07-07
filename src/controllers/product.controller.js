import { getAllProductsService, getProductByIdService, deleteProductService, saveProductService} from "../services/product.service.js"


const getProductsController = async (req, res) => {
  try {
    const products = await getAllProductsService() 
    res.status(200).json(products) 
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error: error.message }) 
  }
} 

const getProductByIdController = async (req, res) => {
  try {
    const product = await getProductByIdService(req.params.id) 
    res.status(200).json(product) 
  } catch (error) {
    if (error.message === 'Producto no encontrado') {
      res.status(404).json({ message: error.message }) 
    } else {
      res.status(500).json({ message: 'Error fetching product', error: error.message }) 
    }
  }
} 

const createProductController = async (req, res) => {
  try {
    const productData = req.body 
    const result = await saveProductService(productData) 
    res.status(201).json(result) 
  } catch (error) {
    res.status(400).json({ message: 'Error creating product', error: error.message }) 
  }
} 

const deleteProductController = async (req, res) => {
  try {
    await deleteProductService(req.params.id) 
    res.status(200).json({ message: "Product deleted successfully" }) 
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error: error.message }) 
  }
} 

export default {
  getProductsController,
  getProductByIdController,
  createProductController,
  deleteProductController
} 
