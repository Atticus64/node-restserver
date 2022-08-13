
const { Router } = require('express');
const { usuariosGet, usuariosPut, usuariosPost, usuariosPatch, usuariosDelete } = require('../controllers/usuarios');

const router = Router()

router.get('/', usuariosGet);

router.put('/:id', usuariosPut);

router.post('/', usuariosPost)

router.delete('/', usuariosDelete );

router.patch('/', usuariosPatch)

router.get('*', (req, res) => {
    res.sendFile('404.html', { root: 'public' })
});


module.exports = router;
