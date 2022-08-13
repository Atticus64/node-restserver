const { response, request } = require('express')

const usuariosGet = (req = request , res = response) => {

    const { q, nombre = 'noName', apiKey, page = 1, limit = 1 } = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apiKey,
        page,
        limit
    }) 
}

const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'put API - controlador',
        id
    }) 
}

const usuariosPost = (req, res = response) => {
    
    const { edad, nombre } = req.body

    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
    }) 
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controlador'
    }) 
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controlador'
    }) 
}




module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}
