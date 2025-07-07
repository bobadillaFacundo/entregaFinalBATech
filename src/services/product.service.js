// productService.js
import * as ProductModel from '../models/productModel.js'   // Ajusta ruta según tu estructura

export async function getProductById(id) {
  if (!id) throw new Error("El ID es obligatorio") 
  const product = await ProductModel.getProductById(id) 
  if (!product) throw new Error("Producto no encontrado") 
  return product 
}

export async function getAllProducts() {
  const products = await ProductModel.getAllProducts() 
  return products 
}

export async function saveProduct(productData) {
  if (!productData.name) throw new Error("El nombre del producto es obligatorio") 
  if (typeof productData.price !== "number" || productData.price < 0) throw new Error("Precio inválido") 
  if (typeof productData.stock !== "number" || productData.stock < 0) throw new Error("Stock inválido") 

  // Aquí podrías agregar más validaciones o transformaciones si querés

  await ProductModel.saveProduct(productData) 
  return { message: "Producto guardado correctamente" } 
}

export async function deleteProduct(id) {
  if (!id) throw new Error("El ID es obligatorio para eliminar") 
  await ProductModel.deleteProduct(id) 
  return { message: "Producto eliminado correctamente" } 
}
