
// {
//     nombre: '',
//     correo: 'usuario@gmail.com',
//     passwod: 'contrasecreta',
//     img: '123321342_back.jpg',
//     rol: 'admin',
//     estado: false
//     google: false
// }

const { Schema, model } = require('mongoose')


const UsuarioSchema = Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
  },
  correo: {
    type: String,
    required: [true, 'El correo es obligatorio'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'La contraseña es obligatoria'],
  },
  img: {
    type: String,
  },
  role: {
    type: String,
    required: true,
    enum: ['ADMIN_ROLE', 'USER_ROLE', 'VENTAS_ROLE']
  },
  estado: {
    type: Boolean,
    default: true
  },
  google: {
    type: Boolean,
    default: false
  }
});

UsuarioSchema.methods.toJSON = function () {
  const { __v, password, _id, ...usuario } = this.toObject();
  usuario.uid = _id;
  return usuario;

}

const Usuario = model('Usuario', UsuarioSchema);

module.exports = Usuario;