
import { generateToken } from "../utils/token-generator.js" 
import { verification } from "../models/user.model.js" 

export async function login(req, res) {
  const user = req.body 
  const authenticatedUser = await verification(user.email, user.password) 
  
  if (authenticatedUser) {
    const token = generateToken(authenticatedUser) 

        res.json({ token }) 
    } else {
        res.sendStatus(401) 
    }
}