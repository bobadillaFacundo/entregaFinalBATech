
const error404 = (req, res, next) => {
    res.status(404).send('Recurso no encontrado') 
}

export default error404