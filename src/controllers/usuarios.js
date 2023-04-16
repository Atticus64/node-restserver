const { response, request } = require('express')
const bcryptjs = require('bcryptjs')
const Usuario = require('../models/usuario');


const usuariosGet = async (req = request, res = response) => {

  // const { q, nombre = 'noName', apiKey, page = 1, limit = 1 } = req.query;
  const { limit = 5, from = 0 } = req.query;

  const query = { estado: true };

  const [users, totalUsers] = await Promise.all([
    Usuario.find(query)
      .skip(from)
      .limit(limit)
    , Usuario.countDocuments(query)
  ]);

  res.json({
    totalUsers,
    users
  })
}

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const usuariosPut = async (req, res = response) => {

  const id = req.params.id;

  const { _id, password, google, correo, ...rest } = req.body

  // TODO valid db id
  if (password) {
    // encriptar contraseña
    const salt = bcryptjs.genSaltSync();
    rest.password = bcryptjs.hashSync(password, salt)
  }


  const usuario = await Usuario.findByIdAndUpdate(id, rest);

  res.json({
    usuario
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

  // hacer hash contraseña
  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync(password, salt)

  // guardar en db
  await usuario.save();

  res.json({
    usuario
  });
}

const usuariosPatch = (req, res = response) => {
  res.json({
    msg: 'patch API - controlador'
  })
}

const usuariosDelete = async (req = request, res = response) => {

  const id = req.params.id

  // fisicamente lo borramos
  // const usuario = await Usuario.findByIdAndDelete(id);

  const usuario = await Usuario.findByIdAndUpdate(id, { estado: false });

  res.json({
    usuario,
    deleted: true
  })
}




module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete
}
