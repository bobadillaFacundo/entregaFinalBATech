import {getAllProducts,getProductById,deleteProduct,saveProduct} from "../models/product.model.js";

export async function getProductByIdService(id) {
  if (!id) throw new Error("El ID es obligatorio") 
  const product = await getProductById(id) 
  if (!product) throw new Error("Producto no encontrado") 
  return product 
}

export async function getAllProductsService() {
  const products = await getAllProducts() 
  return products 
}

export async function saveProductService(productData) {
  if (typeof productData.price !== "number" || productData.price < 0) throw new Error("Precio inválido") 
  if (typeof productData.stock !== "number" || productData.stock < 0) throw new Error("Stock inválido") 

  await saveProduct(productData) 
  return { message: "Producto guardado correctamente" } 
}

export async function deleteProductService(id) {
  if (!id) throw new Error("El ID es obligatorio para eliminar") 
  await deleteProduct(id) 
  return { message: "Producto eliminado correctamente" } 
}
