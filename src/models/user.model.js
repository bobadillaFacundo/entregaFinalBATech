// products.model.js 
import { db } from '../config/db.js' 
import { 
      collection, 
      getDocs
} from 'firebase/firestore'  

const userCollection = collection(db, 'users')  

// Método para buscar un usuario por su ID
export async function verification(email, password) {
    const userDocs = await getDocs(userCollection) 

    if (!userDocs) {
        return null 
    }

    const users = userDocs.docs.map(doc => doc.data()) 
    // Filtrar el usuario por email y password
    const user = users.find(user => 
        user.email === email && user.password === password
    )

    if (user) {
        return user 
    }
    return null 
}