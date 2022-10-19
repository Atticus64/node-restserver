const { response, request } = require('express')
const bcryptjs = require('bcryptjs')
const Usuario = require('../models/usuario');


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

const usuariosPost = async (req, res = response) => {


    
    const { nombre, correo, password, role } = req.body;

    const usuario = new Usuario({
        nombre,
        correo,
        password,
        role    
    });

    // verificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo })

    if ( existeEmail ) {
        return res.status(400).json({
            msg: 'Ese correo ya esta registrado'
        });
    }



    // hacer hash contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password, salt )

    // guardar en db
    await usuario.save();

    console.log(usuario)

    res.json({
        usuario
    });
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
