
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
        enum: ['ADMIN_ROLE', 'USER_ROLE']
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






module.exports = model('Usuario', UsuarioSchema);