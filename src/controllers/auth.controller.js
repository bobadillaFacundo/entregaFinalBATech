import { generateToken } from "../utils/token-generator.js" 
import { verification } from "../models/user.model.js" 

export async function login(req, res) {
  try {
    const { email, password } = req.body 

    if (!email || !password) {
      return res.status(400).json({ message: "Email y contraseña son obligatorios" }) 
    }

    const authenticatedUser = await verification(email, password) 

    if (!authenticatedUser) {
      return res.status(401).json({ message: "Credenciales inválidas" }) 
    }

    const token = generateToken(authenticatedUser) 
    res.json({ token }) 
  } catch (error) {
    console.error("Error en login:", error) 
    res.status(500).json({ message: "Error interno del servidor" }) 
  }
}
