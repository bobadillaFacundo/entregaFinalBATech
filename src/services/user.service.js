import {verification} from "../models/user.model.js";


export async function verifyUser(email, password) {
  if (!email || !password) {
    throw new Error("Email y contraseña son obligatorios") 
  }

  const user = await verification(email, password) 

  if (!user) {
    throw new Error("Usuario o contraseña incorrectos") 
  }

  return user 
}
