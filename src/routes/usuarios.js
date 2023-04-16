const { Router } = require('express');
const { check, query } = require('express-validator');

const { usuariosGet, usuariosPut, usuariosPost, usuariosPatch, usuariosDelete } = require('../controllers/usuarios');
const { validarCampos } = require('../middlewares/validar-campos');
const { isValidRole, existsEmail, existsUserById } = require('../helpers/db-validators');

const router = Router()

router.get('/', [
  query('from', 'From debe ser un numero').optional().isInt(),
  query('limit', 'From debe ser un numero').optional().isInt(),
  validarCampos
], usuariosGet);

router.put('/:id', [
  check('id', 'No es un ID de MongoDB válido').isMongoId(),
  check('id').custom(existsUserById),
  check('role').custom(isValidRole),
  validarCampos
],
  usuariosPut);

router.post('/', [
  check('nombre', 'El nombre es obligatorio').not().isEmpty(),
  check('password', 'El password debe ser mas de 6 letras').isLength({ min: 6 }),
  // check('correo', 'El correo no es válido').isEmail(),
  check('correo').custom(existsEmail),
  // check('role', 'No es un role permitido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
  check('role').custom(isValidRole),
  validarCampos
], usuariosPost)

router.delete('/:id',
  [
    check('id', 'No es un ID de MongoDB válido').isMongoId(),
    check('id').custom(existsUserById),
    validarCampos
  ],
  usuariosDelete);

router.patch('/', usuariosPatch)


module.exports = router;