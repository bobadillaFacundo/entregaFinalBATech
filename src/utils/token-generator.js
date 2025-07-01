import jwt from 'jsonwebtoken'; 
import 'dotenv/config'; 

const secret_key = process.env.JWT_SECRET_KEY; 

// Función para generar un token JWT 
export const generateToken = (userData) => { 
const expiration = { expiresIn: '1m' }; 
return jwt.sign(userData, secret_key, expiration); 
} 