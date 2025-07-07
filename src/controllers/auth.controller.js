import { generateToken } from "../utils/token-generator.js";
import { verifyUser } from "../services/user.service.js";  // Importa el service

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email y contraseña son obligatorios" });
    }

    const authenticatedUser = await verifyUser(email, password);

    const token = generateToken(authenticatedUser);
    res.json({ token });
  } catch (error) {
    if (error.message === "Usuario o contraseña incorrectos") {
      return res.status(401).json({ message: error.message });
    }
    console.error("Error en login:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
}
