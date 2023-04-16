const Role = require('../models/role')
const Usuario = require('../models/usuario')


/**
 * Check if is a valid role
 * @param {string} role 
 */
const isValidRole = async (role = '') => {
  const existeRole = await Role.findOne({ role });
  if (!existeRole) {
    throw new Error('El role no es válido')
  }
}

/**
 * Check if is a valid email
 * @param {string} correo 
 */
const existsEmail = async (correo = '') => {
  const existeEmail = await Usuario.findOne({ correo });

  if (existeEmail) {
    throw new Error(`Ese correo ${correo} ya esta registrado`);
  }

}

const existsUserById = async (id = '') => {
  const existUser = await Usuario.findById(id);

  if (!existUser) {
    throw new Error(`El id ${id} no existe`);
  }
}




module.exports = {
  isValidRole,
  existsEmail,
  existsUserById
}